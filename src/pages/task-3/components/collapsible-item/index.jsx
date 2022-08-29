import { Fragment } from 'react'
import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

/* Components =================================================================================== */
import { Collapsible } from '../../../../components/collapsible'
import { TimeSeriesGraphWrapper } from '../time-series-graph-wrapper'

/* <CollasibleItem /> =========================================================================== */
export const CollasibleItem = ({
  title,
  desc,
  percentage,
  direction,
  containerProps,
  children,
  graph,
}) => {

  return <Collapsible.Container
    {...containerProps}
    className={cn('w-full', containerProps.className)}
  >
    <Collapsible.Header>
      <div className={cn('flex', 'flex-col')}>
        <div className={cn('flex', 'items-center')}>
          <span className={cn('text-bold', 'text-black100')}>{title}</span>
          <span
            className={cn(
              'flex',
              'items-center',
              'ml-2',
              'text-black100',
              'text-bold',
              direction === 0 ? 'text-red-500' : 'text-green-500',
            )}
          >
            {
              percentage && <Fragment>
                <span
                  className={cn('material-symbols-outlined')}
                  css={css(`
                    font-size: 16px; 
                    padding-bottom: 2px; 
                    margin-right: 2px;
                  `)}
                >
                  {direction === 0 ? 'arrow_downward' : 'arrow_upward'}
                </span>
                {percentage}%
              </Fragment>
            }
          </span>
        </div>
        <span className={cn('text-sm', 'text-gray-400')}>
          {desc}
        </span>
      </div>
    </Collapsible.Header>
    <Collapsible.Body>
      <TimeSeriesGraphWrapper input={graph} />
      {children}
    </Collapsible.Body>
  </Collapsible.Container>
}
