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
import { Links } from '../../components/links'
import { Title } from '../../components/title'
import { withPage } from '../../components/with-page'
import { getPosts } from '../../services/ghost'

/* <Task2 /> ==================================================================================== */
export const Task2 = withPage(
  ({ posts = [] }) => {
    return (
      <div className={cn('bg-background100', 'min-h-screen')}>
        {/* Header & Hero ======================================================================== */}
        <Head
          title={'Blog'}
          desc={'The power of data!!'}
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
            height: 32vh;
          `)}
        >
          <Container className={cn('p-2', 'flex', 'flex-col', 'items-center')}>
            <Title color={COLORS['white100']} className={cn('font-display', 'text-center')} gradient>
              Comparative Blog
            </Title>
            <p className={cn('text-center', 'mt-4', 'text-grey200', 'text-lg')}>The Power of Data</p>
            <Button
              className={cn('font-bold', 'mt-8')}
              css={STYLES.shadow}
              bgColor="none"
              borderColor="white100"
              color="white100"
              fontSize="sm"
              size='md'
            >
              Subscribe
            </Button>
          </Container>
        </div>

        {/* Body ================================================================================= */}
        <div className={cn('relative', 'pb-24', 'bg-background200')}>
          <Arc />
          <Container>
            <Grid columns={[1, 2, 3, 3, 3]}>
              {
                posts.map((post, key) => {
                  return <GridItem key={key}>
                    <Card {...post} />
                  </GridItem>
                })
              }
            </Grid>
          </Container>
        </div>

        {/* Footer =============================================================================== */}
        <div className={cn('bg-background100', 'py-16', 'px-2')}>
          <Container>
            <div className={cn('p-2')}>
              <Title
                component="h2"
                color={COLORS['white100']}
                className={cn('font-display', 'text-center', 'max-w-4xl', 'md:text-left', 'pb-0', 'leading-relaxed')}
                gradient
              >
                Join other leading companies automating their data analysis with Compartive
              </Title>
            </div>
            <div
              className={cn(
                'flex',
                'p-2',
                'items-center',
                'mt-4',
                'md:mt-12',
                'md:justify-between',
                'md:items-center',
                'flex-col',
                'md:flex-row',
              )}>
              <Button
                className={cn('font-bold', 'max-w-xs')}
                css={STYLES.shadow}
                bgColor="white100"
                borderColor="white100"
                color="black100"
                fontSize="sm"
                size="lg"
              >
                Schedule a demo
              </Button>
              <Grid
                className={cn('w-full', 'md:w-2/5', 'text-white100', 'mt-4', 'md:mt-0')}
                columns={[2, 2, 4, 4, 4]}>
                <GridItem>
                  <span className={cn('whitespace-nowrap', 'text-center', 'w-full', 'inline-block')}>Company 1</span>
                </GridItem>
                <GridItem>
                  <span className={cn('whitespace-nowrap', 'text-center', 'w-full', 'inline-block')}>Company 2</span>
                </GridItem>
                <GridItem>
                  <span className={cn('whitespace-nowrap', 'text-center', 'w-full', 'inline-block')}>Company 3</span>
                </GridItem>
                <GridItem>
                  <span className={cn('whitespace-nowrap', 'text-center', 'w-full', 'inline-block')}>Company 4</span>
                </GridItem>
              </Grid>
            </div>
            <div className={cn('mt-14', 'p-2')}>
              <div className={cn('flex', 'items-center')}>
                <img src="/logo.svg" loading="lazy" alt="" />
              </div>
              <hr className={cn('mt-5', 'mb-2', 'border-gray-500')} />
            </div>
            <div className={cn('flex', 'justify-between', 'flex-col', 'md:flex-row')}>
              <Links
                className={cn(
                  'items-center',
                  'flex'
                )}
                links={[
                  { label: 'Product', url: '/' },
                  { label: 'About', url: '/' },
                  { label: 'Blog', url: '/' },
                  { label: 'Case Studies', url: '/' },
                  { label: 'Careers', url: '/' },
                ]}
              />
              <Links
                className={cn(
                  'items-center',
                  'flex',
                  'md:mt-0',
                  'mt-4'
                )}
                links={[
                  { label: 'Social 1', url: '/' },
                  { label: 'Social 2', url: '/' },
                  { label: 'Social 3', url: '/' },
                  { label: 'Social 4', url: '/' }
                ]}
              />
            </div>
            <div className={cn('pl-2', 'pr-2', 'mt-8')}>
              <span className={cn('text-gray-400', 'text-sm',)}>Ⓒ {new Date().getFullYear()}</span>
            </div>
          </Container>
        </div>
      </div>
    )
  },
  async () => {
    return {
      posts: await getPosts()
    }
  }
)

/* Styles ======================================================================================= */
const STYLES = {
  shadow: css(`
    position: relative;                
    box-shadow: 0 5px 50px 0 rgb(158 214 255 / 20%);
  `)
}