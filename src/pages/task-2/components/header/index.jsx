import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

/* Components =================================================================================== */
import { Button } from '../../../../components/button'
import { Container } from '../../../../components/container'
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
          { label: 'Blog', url: '/' },
          { label: 'Use Cases', url: '/' },
          { label: 'Schedule a demo', url: '/', highlight: true }
        ],
      }
    })
  }

  return <header className={cn('bg-background100')}>
    <Container className={cn('p-2', 'pt-8', 'pb-0', 'flex', 'items-center', 'justify-between')}>
      <div className={cn('flex', 'items-center')}>
        <img src="/logo.svg" loading="lazy" alt="" />
      </div>
      <div className={cn('flex', 'items-center')}>
        <Links
          className={cn(
            'items-center',
            'ml-8',
            'lg:flex',
            'hidden'
          )}
          links={[
            { label: 'Blog', url: '/' },
            { label: 'Use Cases', url: '/' }
          ]}
        />
      </div>
      <div className={cn('flex', 'items-center', 'justify-end')}>
        <ul className={cn('flex', 'items-center')}>
          <li className={cn('px-2', 'text-white100', 'text-sm', 'flex', 'align-center', 'justify-center', 'sm:flex', 'hidden')}>
            <UserButton label='Sign in' />
          </li>
          <li className={cn('px-2', 'text-white100', 'text-sm', 'flex', 'align-center', 'justify-center', 'sm:flex', 'hidden')}>
            <Button
              className={cn('font-bold')}
              css={css(`
                position: relative;                
                box-shadow:0 5px 50px 0 rgb(158 214 255 / 20%);                
              `)}
              bgColor='white100'
              borderColor='white100'
              color='black100'
              fontSize='sm'
            >
              Schedule a demo
            </Button>
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