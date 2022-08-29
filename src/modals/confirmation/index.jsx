const { css } = require('@emotion/react')

/* Common ======================================================================================= */
const { cn } = require('../../utils/cn')
const { COLORS } = require('../../common/colors')

/* Components =================================================================================== */
const { Button } = require('../../components/button')
const { Modal } = require('../../components/modal')

const type = 'example'
Modal.add(type, ({
  handleContentClick,
  level
}) => {
  return <div
    css={css(`
      width: 320px;      
      background: ${COLORS['white100']};
      top: calc(50% + ${level * 16}px);
    `)}
    className={cn(
      'absolute',
      'left-1/2',
      'transform',
      '-translate-x-1/2',
      '-translate-y-1/2',
      'rounded-md',
      'shdow-sm',
      'p-4'
    )}
    onClick={handleContentClick}
  >
    <p className={cn('text-lg', 'select-none')}>
      This is dialog {level + 1} (offset by level, not a default behaviour)
    </p>
    <Button
      className={'mt-2'}
      onClick={() => {
        Modal.push({
          type
        })
      }}
    >
      Open another modal
    </Button>
    <Button
      className={'mt-2'}
      onClick={() => {
        Modal.pop()
      }}
    >
      Close modal or click outside
    </Button>
  </div>
})

export default type