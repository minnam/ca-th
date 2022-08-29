import { css } from '@emotion/react'
import { COLORS } from '../../../../common/colors'
import { cn } from '../../../../utils/cn'

export const Card = ({ title, desc, icon }) => {
  return <div
    css={css(`
      background: ${COLORS['white100']};
    `)}
    className={cn(
      'p-5',
      'pt-6',
      'shadow-lg',
      'flex',
      'flex-col',
      'items-center',
      'rounded-lg'
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
      css={css({
        color: COLORS['grey400']
      })}
      className={cn(
        'mt-1',
      )}
    >
      {desc}
    </p>
  </div>
}