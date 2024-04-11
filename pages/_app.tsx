import type {
    AppProps
} from "next/app";
import Head from "next/head";
import {
    GeistProvider,
    CssBaseline
} from "@geist-ui/core";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>{`${pageProps.title} | Jose's Website`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Jose's Webpage" />
                <meta
                    property="og:description"
                    content="Data Science, machine Learning, Python & Julia"
                />
                <meta
                    name="google-site-verification"
                    content="Z8eB-LcCtKoVuPT1qEVRbQzeV5rpJ7Tt_OHjkkJJrKM"
                />
            </Head>
            <GeistProvider>
                <CssBaseline />
                <Component {...pageProps} />
            </GeistProvider>
        </>
    );
}
