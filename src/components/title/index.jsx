// https://cssgradient.io/blog/css-gradient-text/
import { css as _css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../utils/cn'
import { COLORS } from '../../common/colors'

/* <Title /> ==================================================================================== */
export const Title = ({
  children,
  className,
  color,
  component = 'h1',
  css,
  gradient,
  ...props
}) => {
  const Component = component

  return <Component
    css={_css(`    
      ${css || ''}
      ${gradient ? CLASSNAMES.gradient : ''}
      ${color ? `color: ${COLORS[color] || color};` : ''}
    `)}
    className={cn(
      className,
      ELEMENT_CLASSNAMES[component],
    )}
    {...props}
  >
    {children}
  </Component>
}

/* Styles ======================================================================================= */
const ELEMENT_CLASSNAMES = {
  'h1': cn(
    'md:text-5xl',
    'text-4xl',
    'font-semibold',
  ),
  'h2': cn(
    'text-3xl',
    'font-semibold',
  ),
  'h3': cn(
    'text-2xl',
    'font-semibold',
  ),
  'h4': cn(
    'text-lg',
    'font-semibold',
  ),
  'h5': cn(
    'text-md',
    'font-semibold',
  ),
  'h6': cn(
    'text-lg',
    'font-semibold',
  ),
}

const CLASSNAMES = {
  gradient: `
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: -webkit-gradient(linear, left top, right top, from(#df84ff), to(#9ed6ff));
    background-image: linear-gradient(90deg, #df84ff, #9ed6ff);
    line-height: 1.2;
  `
}