import { css } from '@emotion/react'
import { cn } from '../../utils/cn'

/* Components =================================================================================== */
import { Button } from '../button'

/* <UserButton /> =============================================================================== */
export const UserButton = ({ label }) => <Button
  css={css(`
    padding-right: 2.8rem;
    position: relative;
    font-weight: 500;
  `)}
  fontSize='sm'
  rounded
>
  <span>{label}</span>
  <span
    css={css(`      
      background: rgba(255,255,255,0.1);
      border-radius: 2rem;
      height: 2rem;
      position: absolute;
      right: .2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `)}
  >
    <span className={cn('material-symbols-rounded', 'opacity-40')}>
      person
    </span>
  </span>
</Button>

