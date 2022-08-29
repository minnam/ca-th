/* Common ======================================================================================= */
import { cn } from '../../utils/cn'

/* <Container /> ================================================================================ */
export const Container = ({ children, className }) => {
  return <div
    className={cn(
      className,
      'relative',
      'max-w-6xl',
      'mx-auto'
    )}
  >
    {children}
  </div>
}