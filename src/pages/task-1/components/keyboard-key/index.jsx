import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

/* Components =================================================================================== */
import { COLORS } from '../../../../common/colors'

export const KeyboardKey = ({ children }) => {
  return <span
    css={css(`
      background: ${COLORS['grey100']};
      border-radius: 2px;
      color: ${COLORS['black100']};
      display: inline-block;
      font-size: 12px;
      font-weight: 500;
      margin-left: 2px;
      margin-right: 2px;
      min-width: 22px;
      padding: 0 2px;      
      text-align: center;
    `)}
    className={cn(
      'font-display'
    )}
  >
    {children}
  </span>
}