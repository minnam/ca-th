import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

/* <Card /> ===================================================================================== */
export const Card = ({ title, desc, icon }) => {
  return <div
    className={cn(
      'p-5',
      'pt-6',
      'shadow-lg',
      'flex',
      'flex-col',
      'items-center',
      'rounded-lg',
      'bg-white100'
    )}
  >
    {icon && <div
      className={cn('flex', 'items-center', 'justify-center', 'mb-2')}
      css={css('width: 80px; height: 80px;')}
    >
      <img src={icon} loading="lazy" alt="" />
    </div>}
    <h3
      className={cn(
        'text-lg',
        'font-bold'
      )}
    >
      {title}
    </h3>
    <p
      className={cn(
        'mt-1',
        'text-center',
        'text-grey400'
      )}
    >
      {desc}
    </p>
  </div>
}