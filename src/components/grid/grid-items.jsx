/* Common ======================================================================================= */
import { cn } from '../../utils/cn'

/* <GridItem> =================================================================================== */
export const GridItem = ({
  children,
  className,
  css
}) => {
  return <div
    className={cn(
      className,
      'p-4',
    )}
    css={css}
  >{children}</div>
}