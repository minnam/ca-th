import React, { useRef } from 'react'
import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../utils/cn'

/* <Grid /> ===================================================================================== */
export const Grid = ({
  children,
  className,
  columns = [1, 1, 1, 1, 1]
}) => {
  const gridItemClassName = useRef(outputGridItemClassName(columns))

  return <div
    className={cn(
      className,
      'flex',
      'flex-wrap',
      'justify-center',
      'w-full',
    )}
  >
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, { css: gridItemClassName.current })
    })}
  </div>
}

/* Styles ======================================================================================= */
const outputGridItemClassName = (columns) => {
  return css(`  
    width: ${1 / columns[0] * 100}%;
    
    @media (min-width: 768px) {
      width: ${1 / columns[1] * 100}%;
    }
    @media (min-width: 1024px) {
      width: ${1 / columns[2] * 100}%;
    }
    @media (min-width: 1280px) {
      width: ${1 / columns[3] * 100}%;
    }
    @media (min-width: 1536px) { 
      width: ${1 / columns[4] * 100}%;
    }
  `)
}