import { css } from '@emotion/react'
import { COLORS } from '../../../../common/colors'
import { cn } from '../../../../utils/cn'

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
    {icon}
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