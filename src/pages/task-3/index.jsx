
/* Common ======================================================================================= */
import { cn } from '../../utils/cn'
import { generateTestData } from './utils/generate-test-data'

/* Components =================================================================================== */
import { Container } from '../../components/container'
import { CollasibleItem } from './components/collapsible-item'

/* Constants ==================================================================================== */
const TEST_DATA = [
  {
    '30-days': generateTestData(30, 150, 10),
    '90-days': generateTestData(90, 150, 10),
    '120-days': generateTestData(120, 150, 10),
  },
  {
    '30-days': generateTestData(30, 150, 10),
    '90-days': generateTestData(90, 150, 10),
    '120-days': generateTestData(120, 150, 10),
  },
  {
    '30-days': generateTestData(30, 150, 10),
    '90-days': generateTestData(90, 150, 10),
    '120-days': generateTestData(120, 150, 10),
  },
  {
    '30-days': generateTestData(30, 150, 10),
    '90-days': generateTestData(90, 150, 10),
    '120-days': generateTestData(120, 150, 10),
  },
  {
    '30-days': generateTestData(30, 150, 10),
    '90-days': generateTestData(90, 150, 10),
    '120-days': generateTestData(120, 150, 10),
  },
]

/* <Task3 /> ==================================================================================== */
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
        graph={TEST_DATA[0]}
      >
        <CollasibleItem
          title={'Users who did vote'}
          desc={'At 29,907 views, increased by 8,623 views'}
          percentage={40}
          direction={0}
          containerProps={{
            className: 'mt-2',
          }}
          graph={TEST_DATA[1]}
        >
          <CollasibleItem
            title={'1,587 users'}
            desc={'At 29,907 views, increased by 8,623 views'}
            percentage={20}
            direction={1}
            containerProps={{
              className: 'mt-2',
            }}
            graph={TEST_DATA[2]}
          >
          </CollasibleItem>
        </CollasibleItem>
        <CollasibleItem
          title={'Outer inpact'}
          desc={'At 29,907 views, increased by 8,623 views'}
          percentage={17}
          direction={1}
          containerProps={{
            className: 'mt-2',
          }}
          graph={TEST_DATA[3]}
        >
        </CollasibleItem>
        <CollasibleItem
          title={'124 users retained'}
          desc={'8.5% of distinct users in this period'}
          containerProps={{
            className: 'mt-2',
          }}
          graph={TEST_DATA[4]}
        >
        </CollasibleItem>
      </CollasibleItem>
    </Container>
  </div>
}