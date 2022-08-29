import { css } from '@emotion/react'
import { cn } from '../../utils/cn'

export const Search = ({ className, placeholder }) => <div
  className={cn(
    'bg-white100',
    'rounded-full',
    'max-w-sm',
    'p-3',
    'px-4',
    'w-full',
    'flex',
    className,
  )}
>
  <span
    className={cn(
      'material-symbols-outlined',
      'text-grey400'
    )}
  >
    search
  </span>
  <input
    className={(cn(
      'bg-transparent',
      'outline-none',
      'w-full',
      'px-2',
      'text-grey400',
    ))}
    css={css(`
      ::placeholder {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;        
      }    
    `)}
    placeholder={placeholder || 'Type here to search'}
  />
</div>
