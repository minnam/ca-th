import { css } from '@emotion/react'
import { isMacOs } from 'react-device-detect'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

/* Components =================================================================================== */
import { Button } from '../../../../components/button'
import { Container } from '../../../../components/container'
import { KeyboardKey } from '../keyboard-key'
import { Links } from '../../../../components/links'
import { Modal } from '../../../../components/modal'
import { UserButton } from '../../../../components/user-button'

/* <Header /> =================================================================================== */
export const Header = () => {

  const handleMenuClick = async () => {
    const type = await import('../../../../modals/header-menu')
    Modal.push({
      type: type.default,
      componentProps: {
        links: [
          { label: 'Reports', url: '/' },
          { label: 'Users', url: '/' },
          { label: 'Teams', url: '/' },
          { label: 'Roles', url: '/' },
        ],
      }
    })
  }

  return <header className={cn('bg-background100')}>
    <Container className={cn('p-2', 'pt-8', 'pb-0', 'flex', 'items-center', 'justify-between')}>
      <div className={cn('flex', 'items-center')}>
        <img src="/logo.svg" loading="lazy" alt="" />
        <Links
          className={cn(
            'items-center',
            'ml-8',
            'lg:flex',
            'hidden'
          )}
          links={[
            { label: 'Reports', url: '/' },
            { label: 'Users', url: '/' },
            { label: 'Teams', url: '/' },
            { label: 'Roles', url: '/' },
          ]}
        />
      </div>
      <div className={cn('flex', 'items-center', 'justify-end')}>
        <ul className={cn('flex', 'items-center')}>
          <li className={cn('px-2', 'text-grey200', 'text-sm', 'xl:block', 'hidden',)}>
            Press <KeyboardKey>{isMacOs ? 'cmd' : 'ctrl'}</KeyboardKey> + <KeyboardKey>k</KeyboardKey> for commands
          </li>
          <li className={cn('px-2', 'text-white100', 'text-sm', 'hidden', 'align-center', 'justify-center', 'lg:flex')}>
            <span className="material-symbols-outlined">error</span>
          </li>
          <li className={cn('px-2', 'text-white100', 'text-sm', 'flex', 'align-center', 'justify-center', 'sm:flex', 'hidden')}>
            <UserButton label='Min Nam' />
          </li>
          <li className={cn('text-white100', 'text-sm', 'flex', 'align-center', 'justify-center', 'lg:hidden', 'flex')}>
            <Button
              css={css(`
                position: relative;
                padding: 0;
                width: 2.4rem;              
              `)}
              bgColor='none'
              borderColor='none'
              onClick={handleMenuClick}
              rounded
            >
              <span className="material-symbols-outlined">
                menu
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  </header>
}