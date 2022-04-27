import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@material-ui/core";
import createCache from "@emotion/cache";
import theme from "../src/theme";
import "/styles/globals.css";

export const cache = createCache({ key: "css", prepend: true });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        {/* global default head values  */}
        <title>James Jo</title>
        <meta name="description" content="Developer Portfolio - James Jo" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
