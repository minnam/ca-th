import React, { useEffect, useRef, useState } from 'react'
import { css as _css, } from '@emotion/react'

/* Common ======================================================================================= */
import { COLORS } from '../../common/colors'
import { cn } from '../../utils/cn'

/* Hooks ======================================================================================== */
import { useSequence } from '../../hooks/use-sequence'

/* <Tooltip /> ================================================================================== */
export const Tooltip = ({
  bgColor = 'background100',
  color = 'grey100',
  minWidth = 'max-content',
  ...props
}) => {
  const [stage, $stage] = useSequence()
  const [toggled, $toggled] = useState(false)
  const [x, $x] = useState(`
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    .tip {
      left: 50%;
      transform: rotate(45deg) translateX(calc(-50% + 3px)) translateY(3px);
    }
  `)
  const refTooltip = useRef()

  useEffect(() => {
    update()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', reset)

    return () => {
      window.removeEventListener('resize', reset)
    }
  }, [refTooltip])

  useEffect(() => {
    if (!toggled && stage === 1) {
      $toggled(true)
      update()
    }
  }, [stage, toggled])

  const update = () => {
    const { x, width, height } = refTooltip.current.getBoundingClientRect()

    if (x < 0) {
      $x(`
        left: calc(50% + ${Math.abs(x) + 8}px);
        transform: translateX(-50%) translateY(-${height + 12}px);

        .tip {
          left: 8px;
          transform: rotate(45deg);
        }
      `)
    } else if (x + width >= window.document.body.clientWidth) {
      $x(`
        right: 8px;
        transform: translateY(-${height + 12}px);

        .tip {
          right: 8px;
          transform: rotate(45deg);
        }
      `)
    } else {
      $x(`
        left: 50%;
        transform: translateX(-50%) translateY(-${height + 12}px);
    
        .tip {
          left: 50%;
          transform: rotate(45deg) translateX(calc(-50% + 3px)) translateY(3px);
        }
      `)
    }
  }

  const reset = () => {
    update()
    $toggled(false)
  }

  return <div
    css={_css(`
      position: relative;
      width: fit-content;
    `)}
  >
    <div
      ref={refTooltip}
      css={_css(`
        z-index: 1;
        ${CLASSES[stage]}        
        ${x}
        background: ${COLORS[bgColor]};
        border-radius: .2rem;        
        color: ${COLORS[color]};
        position: absolute;
        
        transition: .1s opacity ease-in-out;
        min-width: ${minWidth};
        max-width: 200px;
      `)}
      className={cn(
        'p-3',
        'text-sm'
      )}
      onClick={() => {
        $stage.run(3, 4)
      }}
    >
      {props.content}
      <div
        className={cn('tip')}
        css={_css(`
          background: ${COLORS[bgColor]};
          bottom: -6px;          
          height: 12px;
          position: absolute;
          width: 12px;
        `)}
      />
    </div>
    <div
      className={cn('flex', 'item-center', 'justify-center')}
      onClick={() => {
        if (stage < 2 || stage > 3) {
          $stage.run(1, 2)
        } else {
          $stage.run(3, 4)
        }
      }}
      onMouseEnter={() => {
        $stage.run(1, 2)
      }}
      onMouseLeave={() => {
        $stage.run(3, 4)
      }}
    >
      {props.children}
    </div>
  </div>
}

/* Styles ======================================================================================= */
const CLASSES = [
  `
    display: none;
    opacity: 0;
  `,
  `
    display: block;
    opacity: 0;
  `,
  `
    display: block;
    opacity: 1;
  `,
  `
    display: block;
    opacity: 0;
  `,
  `
    display: none;
    opacity: 0;
  `,
]

