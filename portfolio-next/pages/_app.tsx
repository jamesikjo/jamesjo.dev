import * as React from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  ThemeProvider,
  CssBaseline,
  PaletteMode,
  GlobalStyles,
} from "@mui/material";
import createEmotionCache from "../src/utils/createEmotionCache";
import globalTheme from "../styles/globalTheme";
import { globalStyles } from "../styles/globalTheme";
import mailgo from "mailgo";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import "../styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function ThemeProviderMUI({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mode, setMode] = React.useState("light");

  React.useEffect(() => {
    resolvedTheme === "light" ? setMode("light") : setMode("dark");
  }, [resolvedTheme]);

  return (
    <>
      <ThemeProvider theme={globalTheme(mode as PaletteMode)}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />

        {children}
      </ThemeProvider>
    </>
  );
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    mailgo({ showFooter: false });
  }, []);

  return (
    <NextThemeProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProviderMUI>
          <Component {...pageProps} />
        </ThemeProviderMUI>
      </CacheProvider>
    </NextThemeProvider>
  );
};

export default MyApp;
