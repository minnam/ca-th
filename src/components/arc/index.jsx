import { css as _css } from '@emotion/react'
import { COLORS } from '../../common/colors'
import { cn } from '../../utils/cn'

export const Arc = ({
  bgColor1 = 'background100',
  bgColor2 = 'background200',
  absolute = false,
  flip = false,
  ...props
}) => {

  return <div
    css={_css(`
      ${props.css || ''}
      background: ${COLORS[bgColor1] || bgColor1};        
      height: 5rem;  
      position: ${absolute ? 'absolute' : 'relative'};      
      z-index: 0;
    `)}
    className={cn(
      props.className,
      'relative',
    )}
    {...props}
  >
    <div
      css={_css(`                        
        bottom: 0;
        left: 0;
        max-height: 5rem;
        min-height: 5rem;        
        overflow: hidden;
        position: absolute;
        width: 100%;
      `)}
    >
      <div
        css={_css(`
        ${flip ? 'top' : 'bottom'}: -5rem;
        align-items:center;
        background: ${COLORS[bgColor2] || bgColor2};        
        border-radius: 100%;
        display: flex;
        justify-content: center;
        left: 50%;
        max-height: 10rem;
        min-height: 10rem;
        min-width: 15rem;
        position: absolute;
        transform: translateX(-50%);
        width: 120%;
      `)}
      />
    </div>
  </div>
}