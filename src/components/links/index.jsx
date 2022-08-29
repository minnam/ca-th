/* Common ======================================================================================= */
import { cn } from '../../utils/cn'

/* <Links /> ==================================================================================== */
export const Links = ({ className, links = [] }) => {
  return <ul className={cn(className)}>
    {
      links.map(({ label, url, active }, key) => {
        return <li
          className={
            cn(
              'px-2',
              active ? 'text-white100' : 'text-grey200',
              'text-sm',
              'font-semibold',
              'hover:text-white100',
              'cursor-pointer'
            )
          }
          key={key}
        >
          <a href={url}>{label}</a>
        </li>
      })
    }
  </ul>
}