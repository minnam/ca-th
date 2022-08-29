import { css as _css } from '@emotion/react'

/* Common ======================================================================================= */
import { COLORS } from '../../common/colors'
import { cn } from '../../utils/cn'

/* <Button /> =================================================================================== */
export const Button = ({
  bgColor = 'purple200',
  borderColor = 'purple200',
  children,
  className,
  color = 'white100',
  css = '',
  fontSize,
  rounded,
  size = 'md',
  ...props
}) => {
  return <button
    className={cn(
      'flex',
      'items-center',
      'justify-center',
      'select-none',
      className
    )}
    css={_css(`
      ${css}
      ${BOX_SIZES[size]}
      ${fontSize ? `font-size: ${FONT_SIZES[fontSize] || fontSize};` : ''}
      ${rounded ? ROUND[size] : ''}      
      background: ${COLORS[bgColor] || bgColor};      
      border: 1px solid ${COLORS[borderColor] || borderColor};
      color: ${COLORS[color] || bgColor};
      white-space: nowrap;
      transition: .1s all ease-in-out;
      
      &:hover:active {
        transform: scale(0.98);
      }
    `)}
    {...props}
  >
    {children}
  </button>
}

/* STYLES ======================================================================================= */
const FONT_SIZES = {
  'sm': '.8rem',
  'md': '1rem',
  'lg': '1.2rem',
}

const BOX_SIZES = {
  'sm': `
    border-radius: .2rem;
    font-size: ${FONT_SIZES['sm']};
    height: 1.8rem;
    padding: 0.8rem;
  `,
  'md': `
    border-radius: .3rem;
    font-size: ${FONT_SIZES['md']};
    height: 2.4rem;
    padding: 0.8rem;
  `,
  'lg': `
    border-radius: .4rem;
    font-size: ${FONT_SIZES['lg']};
    height: 3.2rem;
    padding: 0.8rem;
  `,
}

const ROUND = {
  'sm': `    
    border-radius: .9rem;
  `,
  'md': `    
    border-radius: 1.2rem;
  `,
  'lg': `    
    border-radius: 1.6rem;
  `,
}