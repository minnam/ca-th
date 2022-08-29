
import { useState } from 'react'

/* Common ======================================================================================= */
import { cn } from '../../../../utils/cn'

/* Components =================================================================================== */
import { TimeSeriesGraph } from '../../../../components/time-series-graph'
import { Tooltip } from '../../../../components/tooltip'


/* <TimeSeriesGraphWrapped /> =================================================================== */
export const TimeSeriesGraphWrapper = ({ input }) => {
  const [value, $value] = useState('30-days')

  const handleChange = (e) => {
    $value(e.target.value)
  }

  return <div>
    <div
      className={cn('flex', 'items-center', 'text-gray-400', 'justify-end', 'w-full')}
    >
      <div
        className={cn('flex', 'items-center', 'text-gray-400')}
        onChange={handleChange}
      >
        <span className={cn('ml-1', 'text-md')}>Last:</span>
        <input
          className={'ml-1'}
          type="radio"
          checked={value === '30-days'}
          value="30-days"
          name="interval"
        />
        <span className={cn('ml-1', 'text-md')}>30</span>
        <input
          className={'ml-3'}
          type="radio"
          checked={value === '90-days'}
          value="90-days"
          name="interval"
        />
        <span className={cn('ml-1', 'text-md')}>90</span>
        <input
          className={'ml-3'}
          type="radio"
          checked={value === '120-days'}
          value="120-days"
          name="interval"
        />
        <span className={cn('ml-1', 'text-md')}>120</span>
      </div>
      <div className='ml-4'>
        <Tooltip content='Info about graph'>
          <span className={cn('material-symbols-outlined')}>error</span>
        </Tooltip>
      </div>
      <div className='ml-4'>
        <Tooltip content='Download'>
          <span className={cn('material-symbols-outlined')}>download</span>
        </Tooltip>
      </div>
    </div>
    <TimeSeriesGraph {...input[value]} />
  </div>
}