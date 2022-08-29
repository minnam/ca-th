import { css } from '@emotion/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { COLORS } from '../../common/colors'

const HEIGHT = 400

const duration = 24 // 2 year project
const definition = 24

export const TimeSeriesGraph = ({
  input,
  max,
  min,
  straight
}) => {
  const containerRef = useRef()
  const [loaded, $loaded] = useState(false)
  const [selected, $selected] = useState(-1)
  const [parentWidth, $parentWidth] = useState(1000)
  const [coordinates, $coordinates] = useState({ x: 0, y: 0 })
  const [isHovered, $isHovered] = useState(false)
  const [internalInput, $internalInput] = useState([])

  useEffect(() => {
    const arr = []
    for (let i = 0; i < input.length; i++) {
      const position = (duration * (i / definition))
      const value = input[i]?.y || max / 2

      let x = (position / duration)
      x = (x * (parentWidth * .814) + 10)

      arr.push({
        ...input[i],
        value,
        x,
        y: ((value / MAX) * (HEIGHT)),
      })
    }
    $internalInput(arr)
  }, [input, parentWidth])

  useEffect(() => {
    const handleResize = () => {
      const { width } = containerRef.current.getBoundingClientRect()
      $parentWidth(width)
    }

    if (containerRef.current) {
      $loaded(true)
      handleResize()

      window.addEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [containerRef])


  const SIZE = input.length
  const MAX = max * 1.2
  const DUMMY_ARR = new Array(SIZE).fill('hello')


  const svgPath = (points, command, type = 'stroke') => {
    const d = points.reduce((acc, point, i, a) => {
      return i === 0 ? `${point.x},${point.y}` : `${acc} ${command(point, i, a)}`
    }, '')

    if (type === 'stroke') {
      return {
        d: `M${d}`,
        stroke: '#7098f6',
        fill: 'none',
        strokeWidth: 2.5,
      }
    }

    return {
      d: `M ${10},${HEIGHT - 14} ${d} L ${points[points.length - 1].x},${HEIGHT - 14} M 0,${HEIGHT - 14}`,
      fill: 'url(#bones-gradient)',
      stroke: 'none'
    }
  }

  const line = (pointA, pointB) => {
    const lengthX = pointB.x - pointA.x
    const lengthY = pointB.y - pointA.y
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX),
    }
  }

  const controlPoint = (current, previous, next, reverse) => {
    const p = previous || current
    const n = next || current
    const smoothing = straight ? 0 : 0.2
    const o = line(p, n)
    const angle = o.angle + (reverse ? Math.PI : 0)
    const length = o.length * smoothing
    const x = current.x + Math.cos(angle) * length
    const y = current.y + Math.sin(angle) * length
    return { x, y }
  }

  const bezierCommand = (point, i, a) => {
    const cps = controlPoint(a[i - 1], a[i - 2], point)
    const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
    return `C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${point.x},${point.y}`
  }

  const handleMouseEnter = (e) => {
    $isHovered(true)
  }

  const handleMouseLeave = (e) => {
    $isHovered(false)
  }

  const handleMouseMove = (e) => {
    const { x, y } = containerRef.current.getBoundingClientRect()
    $coordinates({ x: e.clientX - x, y: e.clientY - y })
  }

  return (
    <div className={'relative'}
      css={css(`        
        overflow: auto;
        white-space: nowrap;
        padding-bottom: 16px;
      `)}
    >
      <svg
        style={{
          width: 40,
          minWidth: 40,
          height: HEIGHT,
          display: 'inline-block',
          position: 'sticky',
          left: 0,
        }}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {DUMMY_ARR.map((test, key) => {
          return (
            <g key={key}>
              {key !== DUMMY_ARR.length - 1 && (
                <text
                  x={0}
                  y={(key / SIZE) * HEIGHT + 2 + 20}
                  fontSize={12}
                  fill={'rgb(180,180,180)'}
                >
                  {key % 5 === 0 && `${Math.round(MAX - (key / SIZE) * MAX)}k`}
                </text>
              )}
            </g>
          )
        })}
      </svg>
      <svg
        style={{
          width: 'calc(100% - 40px)',
          minWidth: 1200,
          height: HEIGHT,
          display: 'inline-block'
        }}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id="bones-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{
              'stopColor': '#d4e0fc',
              'stopOpacity': 1,
            }} />
            <stop offset="100%" style={{
              'stopColor': '#d4e0fc',
              'stopOpacity': 0,
            }} />
          </linearGradient>
        </defs>
        {loaded && <path {...svgPath(internalInput, bezierCommand, 'fill')} />}
        {loaded && <path {...svgPath(internalInput, bezierCommand, 'stroke')} />}
        {DUMMY_ARR.map((test, key) => {
          return (
            <g key={key}>
              {key !== DUMMY_ARR.length - 1 && (
                key % 5 === 0 && <line
                  x1={0}
                  x2={'100%'}
                  y1={(key / SIZE) * HEIGHT - 1 + 20.5}
                  y2={(key / SIZE) * HEIGHT - 1 + 20.5}
                  stroke={'rgb(200,200,200)'}
                  strokeLinecap="round"
                  strokeDasharray="1, 2"
                  strokeWidth={1}
                />
              )}
            </g>
          )
        })}
        {isHovered && <Fragment>
          <line
            x1={coordinates.x}
            x2={coordinates.x}
            y1="0"
            y2={HEIGHT - 8}
            stroke={'rgb(160,160,160)'}
            strokeLinecap="round"
            strokeDasharray="1, 2"
            strokeWidth={1}
          />
          <line
            y1={coordinates.y}
            y2={coordinates.y}
            x1="0"
            x2={parentWidth}
            stroke={'rgb(160,160,160)'}
            strokeLinecap="round"
            strokeDasharray="1, 2"
            strokeWidth={1}
          />
        </Fragment>}
        {
          internalInput.map((point, key) => {
            let textAnchor = 'middle'

            if (key < 10) {
              textAnchor = 'start'
            } else if (key > internalInput.length - 10) {
              textAnchor = 'end'
            }
            return <g key={key}>
              <circle
                style={{
                  transition: '.1s ease-in-out',
                  transitionProperty: 'fill, stroke'
                }}
                cx={point.x}
                cy={point.y}
                r="4"
                stroke={selected === key ? 'black' : point.active ? '#7098f6' : 'rgba(0,0,0,0)'}
                stroke-width="2"
                fill={selected === key ? 'white' : point.active ? 'white' : 'rgba(0,0,0,0)'}
                key={key}
              />
              {
                point.active && <text
                  x={point.x}
                  y={HEIGHT - 8}
                  fontSize={12}
                  fontWeight={point.highlight ? 600 : 400}
                  fill={point.highlight ? COLORS['black100'] : COLORS['grey200']}
                  textAnchor={textAnchor}
                >
                  {point.label}
                </text>
              }
              <rect
                fill={'rgba(0,0,0,0)'}
                x={point.x - ((parentWidth - 32) / internalInput.length) / 2}
                y={0}
                width={(parentWidth - 32) / internalInput.length}
                height={'100%'}
                onMouseEnter={() => {
                  $selected(key)
                }}
                onMouseLeave={() => {
                  $selected(-1)
                }}
              />
            </g>
          })
        }
      </svg>
    </div>
  )
}