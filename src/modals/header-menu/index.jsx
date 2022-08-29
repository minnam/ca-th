import { UserButton } from '../../components/user-button'

const { css } = require('@emotion/react')

/* Common ======================================================================================= */
const { cn } = require('../../utils/cn')
const { COLORS } = require('../../common/colors')

/* Components =================================================================================== */
const { Button } = require('../../components/button')
const { Modal } = require('../../components/modal')

const type = 'header'
Modal.add(type, ({
  handleContentClick,
  links = [],
  footer
}) => {
  return <div
    css={css(`
      background: ${COLORS['white100']};
      top: 8px;
      width: calc(100% - 8px);
    `)}
    className={cn(
      '-translate-x-1/2',
      'absolute',
      'left-1/2',
      'p-4',
      'pb-3',
      'pt-6',
      'rounded-md',
      'shdow-sm',
      'transform',
    )}
    onClick={handleContentClick}
  >
    <div className={cn('flex', 'items-center', 'justify-between')}>
      <img src="/logo-dark.svg" loading="lazy" alt="" />
      <Button
        css={css(`          
          width: 2.4rem;              
        `)}
        color='black100'
        bgColor='none'
        borderColor='none'
        onClick={async () => {
          Modal.pop()
        }}
        rounded
      >
        <span className="material-symbols-outlined">
          close
        </span>
      </Button>
    </div>
    <hr className={'mt-3'} />
    <div className={(cn('flex', 'flex-col'))}>
      {links.map((link, key) => {
        return <a
          className={cn('text-xl', 'mt-3', link.highlight && 'text-purple100', link.highlight && 'font-bold')}
          href={link.url}
          key={key}
        >
          {link.label}
        </a>
      })}
    </div>
    <hr className={cn('mt-3', 'mb-3')} />
    <div className={cn('flex', 'items-center', 'justify-end')}>
      <ul className={cn('flex', 'items-center')}>
        <li className={cn('text-white100', 'text-sm', 'flex', 'align-center', 'justify-center')}>
          <UserButton label='Min Nam' />
        </li>
      </ul>
    </div>
  </div>
})

export default type