import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import { theme } from "globalCSS/theme";
import GlobalStyles from "globalCSS/global";
import Layout from "components/layout/Layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Title</title>
        <meta name="description" content="find this html, crawler!" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
