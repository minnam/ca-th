import React, { useEffect, useState } from 'react'
import { css as _css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../utils/cn'
import { COLORS } from '../../common/colors'

/* Hooks ======================================================================================== */
import { useSequence } from '../../hooks/use-sequence'

/* Components =================================================================================== */
import { Button } from '../button'

/* <Collapsible.Header /> ======================================================================= */
const Header = ({
  $toggled,
  children,
  className,
  css = '',
  focused,
  toggled,
  ...props
}) => {

  return <div
    css={_css(`
      ${css}
      background: ${focused ? COLORS['blue100'] : 'none'};      
      border-radius: .4rem .4rem ${toggled ? '0 0' : '.4rem .4rem'};
      width: 100%;
    `)}
    className={cn(
      className,
      'flex',
      'items-center',
      'p-3',
      'py-2'
    )}
    {...props}
  >
    <Button
      size='md'
      bgColor="none"
      borderColor="none"
      color='grey200'
      css={_css(`
        margin-right: .4rem;
        padding: 0;
      `)}
      onClick={() => {
        $toggled(!toggled)
      }}
    >
      <span
        className="material-symbols-outlined"
        css={_css(`
          font-size: 1.8rem;
          transform: rotate(${toggled ? '0' : '-90deg'}) translateY(${toggled ? '0' : '2px'});
          transition: 0.12s transform ease-in-out;
        `)}
      >
        expand_more
      </span>
    </Button>
    {children}
  </div>
}

/* <Collapsible.Body /> ========================================================================= */
const Body = ({
  children,
  className,
  css,
  ...props
}) => {
  return <div
    className={cn(
      className,
      'w-full',
      'p-3',
    )}
    {...props}
  >
    {children}
  </div>
}

/* <Collapsible.Container /> ==================================================================== */
const Container = ({
  children,
  css,
  focused,
  toggled,
  ...props
}) => {

  const [_toggled, $toggled] = useState(toggled)
  const [, $sequence] = useSequence()

  useEffect(() => {
    if (_toggled !== undefined) {
      if (_toggled) {
        $sequence.run(1, 2)
      } else {
        $sequence.run(3, 4)
      }
    }
  }, [_toggled])

  return <div
    css={_css(`
      ${css ? css : ''}
      border: 1px solid ${COLORS[focused ? 'blue300' : 'grey300']};
      border-radius: .4rem;
    `)}
    {...props}
  >
    {children[0] && React.cloneElement(children[0], { toggled: _toggled, $toggled, focused })}
    <div
      style={{
        maxHeight: _toggled ? 'max-content' : '0px'
      }}
      css={_css(`        
        overflow: ${_toggled ? '' : 'hidden'};
        transition: .2s max-height ease-in-out;
      `)}
    >
      {$sequence.isActive() && children[1]}
    </div>
  </div >
}

/* Exports ====================================================================================== */
export const Collapsible = {
  Container,
  Header,
  Body
}