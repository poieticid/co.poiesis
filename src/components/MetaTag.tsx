import Head from 'next/head'

type MetaTagProps = {
  title: string
  description?: string
  url?: string
  image?: string
  robots?: string
}

export const MetaTag = ({ title, description, url, image, robots }: MetaTagProps) => {
  const siteName = 'fragment.place'
  const fullTitle = `${title} | fragment.place – living syntax, shared in silence`
  const metaDescription = description || 'fragment.place is a poetic syntax unfolding in fragments.'
  const canonicalURL = url || 'https://fragment.place'
  const ogImage = image || 'https://fragment.place/og.png'
  const robotsTag = robots || 'index,follow'

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yasufrag" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Optional */}
      <meta name="robots" content={robotsTag} />
      <meta name="author" content="fragment.place" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    </Head>
  )
}