/* Common ======================================================================================= */
import { cn } from '../../utils/cn'
import { generateTestData } from '../task-3/utils/generate-test-data'

/* Components =================================================================================== */
import { Button } from '../../components/button'
import { Card } from './components/card'
import { Collapsible } from '../../components/collapsible'
import { Container } from '../../components/container'
import { Grid } from '../../components/grid'
import { GridItem } from '../../components/grid/grid-items'
import { TimeSeriesGraph } from '../../components/time-series-graph'
import { Title } from '../../components/title'
import { Tooltip } from '../../components/tooltip'
import { Modal } from '../../components/modal'

/* <Home /> ===================================================================================== */
export const Home = () => {
  return (
    <div className={cn('py-20')}>
      <Container>
        <div className={cn('p-3')}>
          <Title component='h3'>Links</Title>
          <ul className='mt-2'>
            <li>
              <a className='text-blue-500 hover:text-blue-400' href='/task-1'>
                Task 1 (Knowledge Base)
              </a>
            </li>
            <li>
              <a className='text-blue-500 hover:text-blue-400' href='/task-2'>
                Task 2 (Blog)
              </a>
            </li>
            <li>
              <a className='text-blue-500 hover:text-blue-400' href='/task-3'>
                Task 3 (Time-series Graph)
              </a>
            </li>
          </ul>
        </div>
        <div className={cn('p-3', 'mt-10')}>
          <Title component='h3'>Components created for this project</Title>
        </div>

        {/* Grid 1 */}
        <div className={cn('p-3')}>
          <Title component='h4'>Responsive Grid [1, 2, 3, 4, 5]</Title>
        </div>
        <Grid columns={[1, 2, 3, 4, 5]}>
          <GridItem>
            <Card title='Grid 1' desc='Description 1' />
          </GridItem>
          <GridItem>
            <Card title='Grid 2' desc='Description 2' />
          </GridItem>
          <GridItem>
            <Card title='Grid 3' desc='Description 3' />
          </GridItem>
          <GridItem>
            <Card title='Grid 4' desc='Description 4' />
          </GridItem>
          <GridItem>
            <Card title='Grid 5' desc='Description 5' />
          </GridItem>
        </Grid>

        {/* Grid 2 */}
        <div className={cn('p-3')}>
          <Title component='h4'>Responsive Grid [1, 2, 3, 3, 3]</Title>
        </div>
        <Grid columns={[1, 2, 3, 3, 3]}>
          <GridItem>
            <Card title='Grid 1' desc='Description 1' />
          </GridItem>
          <GridItem>
            <Card title='Grid 2' desc='Description 2' />
          </GridItem>
          <GridItem>
            <Card title='Grid 3' desc='Description 3' />
          </GridItem>
          <GridItem>
            <Card title='Grid 4' desc='Description 4' />
          </GridItem>
          <GridItem>
            <Card title='Grid 5' desc='Description 5' />
          </GridItem>
          <GridItem>
            <Card title='Grid 6' desc='Description 6' />
          </GridItem>
        </Grid>

        {/* Buttons */}
        <div className={cn('p-3')}>
          <Title component='h4'>Button</Title>
        </div>
        <div className={cn('p-3', 'flex', 'flex-wrap')}>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='lg'
            rounded
          >
            Button lg
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='lg'
          >
            Button lg
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='lg'
            color='black100'
            borderColor='black100'
            bgColor='none'
          >
            Button lg
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='md'
            rounded
          >
            Button md
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='md'
          >
            Button md
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='md'
            color='black100'
            borderColor='black100'
            bgColor='none'
          >
            Button md
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='sm'
            rounded
          >
            Button sm
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='sm'
          >
            Button sm
          </Button>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='sm'
            color='black100'
            borderColor='black100'
            bgColor='none'
          >
            Button sm
          </Button>
        </div>

        {/* Modal */}
        <div className={cn('p-3')}>
          <Title component='h4'>Modal</Title>
        </div>
        <div className={cn('p-3', 'flex', 'flex-wrap')}>
          <Button
            className={cn('mr-2', 'mb-2')}
            size='lg'
            onClick={async () => {
              const type = await import('../../modals/confirmation')
              Modal.push({ type: type.default })
            }}
            rounded
          >
            Open a modal
          </Button>
        </div>

        {/* Collapsible */}
        <div className={cn('p-3')}>
          <Title component='h4'>Collapsible</Title>
        </div>
        <div className={cn('p-3', 'flex', 'flex-wrap')}>
          <Collapsible.Container className={cn('w-full')} toggled focused>
            <Collapsible.Header>{'Parent (toggled & focused)'}</Collapsible.Header>
            <Collapsible.Body>
              <Collapsible.Container className={cn('mb-3')} toggled>
                <Collapsible.Header>Child 1 (toggled)</Collapsible.Header>
                <Collapsible.Body>
                  Child 1 Body
                </Collapsible.Body>
              </Collapsible.Container>
              <Collapsible.Container>
                <Collapsible.Header>Child 2</Collapsible.Header>
                <Collapsible.Body>Child 2 Body</Collapsible.Body>
              </Collapsible.Container>
            </Collapsible.Body>
          </Collapsible.Container>
        </div>

        {/* Time-series Graph */}
        <div className={cn('p-3')}>
          <Title component='h4'>Time-series Graph (straight)</Title>
        </div>
        <div className={cn('p-3', 'flex', 'flex-wrap')}>
          <TimeSeriesGraph {...generateTestData(30, 100, 10)} straight />
        </div>

        <div className={cn('p-3')}>
          <Title component='h4'>Time-series Graph</Title>
        </div>
        <div className={cn('p-3', 'flex', 'flex-wrap')}>
          <TimeSeriesGraph {...generateTestData(30, 100, 10)} />
        </div>

        {/* Tooltip */}
        <div className={cn('p-3')}>
          <Title component='h4'>Tooltip (resize window to see how it behaves)</Title>
        </div>
        <div className={cn('p-3', 'flex', 'justify-between')}>
          <Tooltip
            content='Lorem ipsum dolor sit amet'
            minWidth={'120px'}
          >
            <Button
              children='Tooltip'
              size='lg'
              fontSize=".8rem"
            />
          </Tooltip>
          <Tooltip
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
            minWidth={'300px'}
          >
            <Button
              children='Tooltip'
              size='lg'
              fontSize=".8rem"
            />
          </Tooltip>
          <Tooltip
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
            minWidth={'300px'}
          >
            <Button
              children='Tooltip'
              size='lg'
              fontSize=".8rem"
            />
          </Tooltip>
        </div>

        {/* Title */}
        <div className={cn('p-3', 'mt-4')}>
          <Title component='h4'>Title</Title>
        </div>
        <div className={cn('p-3')}>
          <Title color={'black100'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Title>
          <Title className={cn('mt-10')} component={'h2'} gradient>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Title>
          <Title className={cn('mt-10', 'font-display')} component={'h3'} gradient>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Title>
        </div>
      </Container>
    </div>
  )
}