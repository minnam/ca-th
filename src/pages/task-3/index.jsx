import { css } from '@emotion/react'
import { Collapsible } from '../../components/collapsible'
import { Container } from '../../components/container'
import { TimeSeriesGraph } from '../../components/time-series-graph'
import { cn } from '../../utils/cn'
import { generateTestData } from './utils/generate-test-data'


const TEST_DATA = {
  '30-days': generateTestData(30, 150, 10),
  '90-days': generateTestData(90, 150, 10),
  '120-days': generateTestData(120, 150, 10),
}


const CollasibleItem = ({
  title,
  desc,
  percentage,
  direction,

  containerProps,
  header,
  body,
  children,
  graph,
}) => {
  return <Collapsible.Container {...containerProps} className={cn('w-full', containerProps.className)}>
    <Collapsible.Header>
      <div className={cn('flex', 'flex-col')}>
        <div className={cn('flex', 'items-center')}>
          <span className={cn('text-bold', 'text-black100')}>{title}</span>
          <span
            className={cn(
              'text-bold',
              'text-black100',
              'ml-2',
              direction === 0 ? 'text-red-500' : 'text-green-500',
              'flex',
              'items-center'
            )}
          >
            <span
              className={cn('material-symbols-outlined')}
              css={css('font-size: 16px; padding-bottom: 2px; margin-right: 2px;')}
            >
              {direction === 0 ? 'arrow_downward' : 'arrow_upward'}
            </span>
            {percentage}%
          </span>
        </div>
        <span className={cn('text-sm', 'text-gray-400')}>
          {desc}
        </span>
      </div>
    </Collapsible.Header>
    <Collapsible.Body>
      {graph}
      {children}
    </Collapsible.Body>
  </Collapsible.Container >
}

export const Task3 = () => {
  return <div className={cn('min-h-screen', 'py-20')}>
    <Container className={cn('p-2', 'flex', 'flex-col', 'items-center')}>
      <CollasibleItem
        title={'Users who did vote'}
        desc={'At 29,907 views, increased by 8,623 views'}
        percentage={40}
        direction={0}
        containerProps={{
          toggled: true,
          focused: true,
        }}
        graph={<TimeSeriesGraph
          {...TEST_DATA['30-days']}
        />}
      >
        <CollasibleItem
          title={'Users who did vote'}
          desc={'At 29,907 views, increased by 8,623 views'}
          percentage={40}
          direction={0}
          containerProps={{
            className: 'mt-2',
          }}
          graph={<TimeSeriesGraph
            {...TEST_DATA['30-days']}
          />}
        >
          <CollasibleItem
            title={'Users who did vote'}
            desc={'At 29,907 views, increased by 8,623 views'}
            percentage={40}
            direction={0}
            containerProps={{
              className: 'mt-2',
            }}
            graph={<TimeSeriesGraph
              {...TEST_DATA['30-days']}
            />}
          >
          </CollasibleItem>
        </CollasibleItem>
        <CollasibleItem
          title={'Users who did vote'}
          desc={'At 29,907 views, increased by 8,623 views'}
          percentage={40}
          direction={0}
          containerProps={{
            className: 'mt-2',
          }}
          graph={<TimeSeriesGraph
            {...TEST_DATA['30-days']}
          />}
        >
        </CollasibleItem>
        <CollasibleItem
          title={'Users who did vote'}
          desc={'At 29,907 views, increased by 8,623 views'}
          percentage={40}
          direction={0}
          containerProps={{
            className: 'mt-2',
          }}
          graph={<TimeSeriesGraph
            {...TEST_DATA['30-days']}
          />}
        >
        </CollasibleItem>
        <CollasibleItem
          title={'Users who did vote'}
          desc={'At 29,907 views, increased by 8,623 views'}
          percentage={40}
          direction={0}
          containerProps={{
            className: 'mt-2',
          }}
          graph={<TimeSeriesGraph
            {...TEST_DATA['30-days']}
          />}
        >
        </CollasibleItem>

      </CollasibleItem>
    </Container>
  </div>
}