import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import createCache from "@emotion/cache";
import theme from "../src/theme";
import mailgo from "mailgo";
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
    mailgo({ showFooter: false });
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        {/* global default head values  */}
        <meta name="description" content="Developer Portfolio" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
