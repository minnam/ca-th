import { css } from '@emotion/react'
import { cn } from '../../../../utils/cn'

export const LinkCard = ({ title, desc, icon }) => {
  return <div
    className={cn(
      'p-5',
      'pt-6',
      'flex',
      'flex-row',
      'rounded-lg',
      'items-center',
      // 'justify-center'
    )}
  >
    <div
      className={'mr-4'}
      css={css('width: 32px; height: 32px;')}
    >
      <img src={icon} loading="lazy" alt="" />
    </div>
    <div>
      <h3
        className={cn(
          'text-md',
          'font-bold',
          'text-white',
          'whitespace-nowrap'
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'mt-1',
          'text-sm',
          'text-blue400',
          'underline'
        )}
      >
        {desc}
      </p>
    </div>
  </div>
}