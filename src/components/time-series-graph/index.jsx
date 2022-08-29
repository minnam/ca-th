import React, { Fragment, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { COLORS } from '../../common/colors'

const HEIGHT = 400
const WIDTH = 1200
const FIRST_POINT_OFFSET = 5
const Y_OFFSET = 20
const Y_TEXT_OFFSET = 3
const SIZE = 10
const SMOOTHING = 0.2

export const TimeSeriesGraph = ({
  input,
  max,
  min,
  straight
}) => {
  const dummyRef = useRef()
  const containerRef = useRef()

  const [selected, $selected] = useState(-1)
  const [coordinates, $coordinates] = useState({ x: 0, y: 0 })
  const [isHovered, $isHovered] = useState(false)
  const [internalInput, $internalInput] = useState([])

  const MAX = max * 1.2
  const INTERVAL = (MAX - min) / SIZE
  const GUIDE_ARR = new Array(INTERVAL).fill('')

  useEffect(() => {
    const parsedInput = []

    // Count one more to finish off the graph
    for (let i = 0; i < input.length + 1; i++) {
      const x = i / input.length * WIDTH + FIRST_POINT_OFFSET
      const y = input[i]?.y !== undefined ? input[i]?.y : MAX / 2

      if (i === input.length) {
        parsedInput.push({
          active: false,
          x,
          y: (HEIGHT - (y / MAX) * (HEIGHT)) + Y_OFFSET,
        })
      } else if (i === 0) {
        parsedInput.push({
          ...input[i],
          active: true,
          x,
          y: (HEIGHT - (y / MAX) * (HEIGHT)) + Y_OFFSET,
        })
      } else {
        parsedInput.push({
          ...input[i],
          x,
          y: (HEIGHT - (y / MAX) * (HEIGHT)) + Y_OFFSET,
        })

      }
    }
    $internalInput(parsedInput)
  }, [input])


  const getSVGPath = (points, command, type = 'stroke') => {
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
      d: `M ${FIRST_POINT_OFFSET},${HEIGHT} ${d} L ${points[points.length - 1].x},${HEIGHT} M 0,${HEIGHT}`,
      fill: 'url(#gradient)',
      stroke: 'none'
    }
  }

  const getLine = (pointA, pointB) => {
    const lengthX = pointB.x - pointA.x
    const lengthY = pointB.y - pointA.y
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX),
    }
  }

  const getControlPoint = (current, previous, next, reverse) => {
    const p = previous || current
    const n = next || current
    const smoothing = straight ? 0 : SMOOTHING
    const o = getLine(p, n)
    const angle = o.angle + (reverse ? Math.PI : 0)
    const length = o.length * smoothing
    const x = current.x + Math.cos(angle) * length
    const y = current.y + Math.sin(angle) * length

    return { x, y }
  }

  const getBezierCommand = (point, i, a) => {
    const cps = getControlPoint(a[i - 1], a[i - 2], point)
    const cpe = getControlPoint(point, a[i - 1], a[i + 1], true)
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
    <div
      className={'relative'}
      css={css(`        
        overflow: auto;
        white-space: nowrap;
        padding-bottom: 16px;
      `)}
      ref={containerRef}
    >
      <div ref={dummyRef} />
      <div>
        <svg
          css={css(`
            width: 40px;
            min-width: 40px;
            height: ${HEIGHT}px;
            display: inline-block;
            position: sticky;
            left: 0;
          `)}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {GUIDE_ARR.map((test, key) => {
            return (
              <g key={key}>
                {key !== GUIDE_ARR.length - 1 && (
                  <text
                    x={0}
                    y={(key / SIZE) * HEIGHT + Y_TEXT_OFFSET + Y_OFFSET}
                    fontSize={12}
                    fill={'rgb(180,180,180)'}
                  >
                    {`${Math.round(MAX - (key / SIZE) * MAX)}k`}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
        <svg
          style={{
            width: 'calc(100% - 40px)',
            minWidth: WIDTH,
            height: HEIGHT,
            display: 'inline-block'
          }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Defining gradient for graph path */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{
                  'stopColor': '#d4e0fc',
                  'stopOpacity': 1,
                }} />
              <stop
                offset="100%"
                style={{
                  'stopColor': '#d4e0fc',
                  'stopOpacity': 0,
                }} />
            </linearGradient>
          </defs>
          {/* graph path with gradient fill */}
          {internalInput.length > 0 && <path {...getSVGPath(internalInput, getBezierCommand, 'fill')} />}

          {/* graph path with actual line */}
          {internalInput.length > 0 && <path {...getSVGPath(internalInput, getBezierCommand, 'stroke')} />}

          {/* guide lines */}
          {GUIDE_ARR.map((test, key) => {
            return (
              <g key={key}>
                {key !== GUIDE_ARR.length - 1 && <line
                  x1={0}
                  x2={'100%'}
                  y1={(key / SIZE) * HEIGHT - 1 + 20.5}
                  y2={(key / SIZE) * HEIGHT - 1 + 20.5}
                  stroke={'rgb(200,200,200)'}
                  strokeLinecap="round"
                  strokeDasharray="1, 2"
                  strokeWidth={1}
                />}
              </g>
            )
          })}

          {/* interactive guide lines */}
          {isHovered && <Fragment>
            <line
              x1={coordinates.x - 40 + containerRef.current.scrollLeft}
              x2={coordinates.x - 40 + containerRef.current.scrollLeft}
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
              x2={WIDTH}
              stroke={'rgb(160,160,160)'}
              strokeLinecap="round"
              strokeDasharray="1, 2"
              strokeWidth={1}
            />
          </Fragment>}

          {/* Circle and x-axis label */}
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
                  strokeWidth="2"
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
              </g>
            })
          }

          {/* tooltip and empty rectangle for mouse enter/leave */}
          {
            internalInput.map((point, key) => {
              const dummyRect = dummyRef.current.getBoundingClientRect()
              const containerScrollLeft = containerRef.current.scrollLeft
              const y = Math.max(point.y - 48, 48)
              const x = point.x + 140 > dummyRect.width ? dummyRect.width - 128 - 60 + containerScrollLeft : point.x

              return <g
                key={key}
                style={{
                  opacity: key !== internalInput.length - 1 && selected === key ? 1 : 0
                }}
              >
                <rect
                  x={x}
                  y={y}
                  fill={'#3e4345'}
                  width={128}
                  height={40}
                  rx={8}
                />
                <text
                  x={x + 16}
                  y={y + 24}
                  fontSize={12}
                  fontWeight={point.highlight ? 600 : 400}
                  fill={'#8a94b6'}
                  textAnchor={'start'}
                >
                  {point.formattedDate}
                </text>
                {point.val && <text
                  x={x + 116}
                  y={y + 24}
                  fontSize={12}
                  fontWeight={700}
                  fill={'white'}
                  textAnchor={'end'}
                >
                  {Math.round(point.val)}
                </text>}
                <rect
                  fill={'rgba(0,0,0,0)'}
                  x={point.x - ((WIDTH - 32) / internalInput.length) / 2}
                  y={0}
                  width={(WIDTH - 32) / internalInput.length}
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
    </div>
  )
}