import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

export const Card = ({ title, desc, icon }) => {
  return <div
    className={cn(
      'flex',
      'flex-col',
      'mb-4',
      'lg:mb-0'
    )}
  >
    <div
      css={css(`
        height: 200px;
        width: 100%;
      `)}
      className={cn(
        'bg-grey200',
        'rounded-md'
      )}
    />
    <div className="mt-2">
      <a
        href='/task-2'
        className={cn(
          'text-xs',
          'font-semibold',
          'text-blue-500',
          'hover:text-blue-400',
        )}
      >
        Blog
      </a>
      <h3
        className={cn(
          'text-lg',
          'font-bold'
        )}
      >
        {title}
      </h3>
      <p
        css={css(`
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        `)}
        className={cn(
          'mt-1',
          'text-sm'
        )}
      >
        {desc}
      </p>
      <div className={cn('mt-3', 'flex', 'items-center')}>
        <div
          css={css(`
            width: 36px;
            height: 36px;
          `)}
          className={cn(
            'rounded-full',
            'bg-grey200',
          )}
        />
        <div className={cn('ml-2', 'flex', 'flex-col', 'justify-center')}>
          <a
            href='/task-2'
            className={cn(
              'text-xs',
              'font-semibold',
              'text-blue-500',
              'hover:text-blue-400',
            )}
          >
            Min Nam
          </a>
          <p
            className={cn(
              'text-xs',
              'text-gray-400'
            )}
          >
            Apr 11, 2022 · 3 min red
          </p>
        </div>
      </div>
    </div>
  </div>
}