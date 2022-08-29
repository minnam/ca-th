import { useState } from 'react'
import { css } from '@emotion/react'

/* Common ======================================================================================= */
import { COLORS } from '../../common/colors'
import { cn } from '../../utils/cn'

/* Components =================================================================================== */
import { Arc } from '../../components/arc'
import { Button } from '../../components/button'
import { Card } from './components/card'
import { Container } from '../../components/container'
import { Grid } from '../../components/grid'
import { GridItem } from '../../components/grid/grid-items'
import { Head } from '../../components/head'
import { Header } from './components/header'
import { LinkCard } from './components/link-card'
import { Search } from '../../components/search'
import { Title } from '../../components/title'

/* <Task1 /> ==================================================================================== */
export const Task1 = () => {
  const [selected, $selected] = useState('technologyStack')

  return <div className={cn('bg-background100', 'min-h-screen')}>

    {/* Header & Hero ========================================================================== */}
    <Head
      title={'Task 1'}
      desc={'Task 1 for front-end assignment'}
    />
    <Header />
    <div
      className={cn(
        'bg-background100',
        'flex',
        'items-center',
        'justify-center',
        'p-2'
      )}
      css={css(`
        min-height: 400px;
        height: 45vh;
      `)}
    >
      <Container className={cn('flex', 'flex-col', 'items-center', 'p-2',)}>
        <Title
          className={cn('text-center')}
          color={COLORS['white100']}
        >
          Hi! How can we help you today?
        </Title>
        <Search
          className={cn('mt-10')}
          placeholder={'Search Comparative Knowledge Base'}
        />
      </Container>
    </div>

    {/* Body =================================================================================== */}
    <div className={'bg-background200'}>
      <div className={cn('relative',)}>
        <Arc />
        <Container
          className={cn('z-1')}
          css={css('margin-top: -160px;')}
        >
          <Grid columns={[1, 2, 3, 3, 3,]}>
            {
              Object.keys(CONTENTS.categories).map((key) => {
                return <GridItem key={key}>
                  <Card {...CONTENTS.cards[key]} />
                </GridItem>
              })
            }
          </Grid>
        </Container>
      </div>
      <div className={cn('mt-16', 'pb-24')}>
        <Container>
          <Title component="h2" className={cn('text-center')}>
            Most viewed
          </Title>
          <p
            className={cn(
              'max-w-md',
              'mt-3',
              'mx-auto',
              'text-center',
              'text-grey200',
            )}
          >
            In Comparitive, we are building a product that allows the effortless turn the raw data into meaningful insights.
          </p>
          <div
            className={cn(
              'flex',
              'flex-wrap',
              'items-center',
              'justify-center',
              'mt-6',
            )}
          >
            {Object.keys(CONTENTS.categories).map((key) => {
              const styleObj = key === selected ? STYLES.selected : STYLES.default
              return <Button
                className={cn('mx-1', 'mt-1')}
                size='sm'
                rounded
                onClick={() => $selected(key)}
                {...styleObj}
                key={key}
              >
                {CONTENTS.categories[key]}
              </Button>
            })}
          </div>
          <Grid
            className={cn('mt-2')}
            columns={[1, 2, 3, 3, 3,]}
          >
            <GridItem>
              <Card
                title={`${CONTENTS.categories[selected]} Item 1`}
                desc={`${CONTENTS.categories[selected]} Description 1`}
                icon=""
              />
            </GridItem>
            <GridItem>
              <Card
                title={`${CONTENTS.categories[selected]} Item 2`}
                desc={`${CONTENTS.categories[selected]} Description 2`}
                icon=""
              />
            </GridItem>
            <GridItem>
              <Card
                title={`${CONTENTS.categories[selected]} Item 3`}
                desc={`${CONTENTS.categories[selected]} Description 3`}
                icon=""
              />
            </GridItem>
            <GridItem>
              <Card
                title={`${CONTENTS.categories[selected]} Item 4`}
                desc={`${CONTENTS.categories[selected]} Description 4`}
                icon=""
              />
            </GridItem>
            <GridItem>
              <Card
                title={`${CONTENTS.categories[selected]} Item 5`}
                desc={`${CONTENTS.categories[selected]} Description 5`}
                icon=""
              />
            </GridItem>
            <GridItem>
              <Card
                title={`${CONTENTS.categories[selected]} Item 6`}
                desc={`${CONTENTS.categories[selected]} Description 6`}
                icon=""
              />
            </GridItem>
          </Grid>
        </Container>
      </div>
    </div>

    {/* Footer ================================================================================= */}
    <div
      className={cn(
        'bg-background100',
        'flex',
        'items-center',
        'justify-center',
        'py-16',
      )}
    >
      <Container>
        <div className={cn('p-2')}>
          <Title
            component="h2"
            color={COLORS['white100']}
            className={cn(
              'md:text-center',
              'p-5',
              'pb-0',
              'text-left',
            )}
          >
            Get in touch
          </Title>
          <p
            className={cn(
              'max-w-none',
              'md:max-w-lg',
              'md:mx-auto',
              'md:text-center',
              'p-5',
              'pb-0',
              'text-grey200',
              'text-left',
            )}
          >
            In Comparitive, we are building a product that allows the effortless turn the raw data into meaningful insights.
          </p>
        </div>
        <Grid className={cn('mt-2')} columns={[1, 1, 3, 3, 3,]}>
          <GridItem>
            <LinkCard
              title='Technical Support'
              desc="Contact our support team."
              icon={'/icon-technical-support.svg'}
            />
          </GridItem>
          <GridItem>
            <LinkCard
              title='Analytic Support'
              desc="Contact our support team."
              icon={'/icon-analytical-support.svg'}
            />
          </GridItem>
          <GridItem>
            <LinkCard
              title='Admin Support'
              desc="Contact our support team."
              icon={'/icon-admin-support.svg'}
            />
          </GridItem>
        </Grid>
      </Container>
    </div>
  </div>
}

/* STYLES ======================================================================================= */
const STYLES = {
  selected: {
    bgColor: 'purple100',
    color: 'white100'
  },
  default: {
    bgColor: 'none',
    borderColor: 'none',
    color: 'black100'
  },
}

/* Contents ===================================================================================== */
const CONTENTS = {
  categories: {
    'technologyStack': 'Technology Stack',
    'reports': 'Reports',
    'account': 'Account',
    'features': 'Features and use cases',
    'faqs': 'FAQs',
  },
  cards: {
    'technologyStack': {
      title: 'Technology stack',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '/icon-technology-stack.svg'
    },
    'reports': {
      title: 'Reports',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '/icon-reports.svg'
    },
    'account': {
      title: 'Account',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '/icon-user.svg'
    },
    'features': {
      title: 'Features and use cases',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '/icon-features.svg'
    },
    'faqs': {
      title: 'FAQs',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '/icon-faqs.svg'
    },
  }
}