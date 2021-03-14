import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'services/apollo'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from 'styles'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <link rel="shortcut icon" href="/assets/icon-512.png" />
          <link rel="apple-touch-icon" href="/assets/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Best game store in the world" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
