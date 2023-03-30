import Head from 'next/head';
import type { AppProps } from 'next/app';

import { GeistProvider, CssBaseline } from '@geist-ui/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`${Component.name} | Jose's Website`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jose's Webpage" />
        <meta
          property="og:description"
          content="Data Science, machine Learning, Python & Julia"
        />
      </Head>
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}
