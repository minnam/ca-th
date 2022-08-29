import { Helmet } from 'react-helmet'

export const Head = ({ title, desc, img }) => {
  return <Helmet>
    <title>{title} | Comparative</title>
    <meta name="description" content={desc} />
    <meta name="description" key="description" content={desc} />
    <meta name="title" key="title" content={title} />
    <meta property="og:title" key="og:title" content={title} />
    <meta property="og:locale" key="og:locale" content="en_US" />
    <meta charSet="utf-8" />
    <meta property="og:type" key="og:type" content="website" />
    <meta property="og:description" key="og:description" content={desc} />
    {img && <meta property="og:image" key="og:image" content={img} />}
  </Helmet>
}