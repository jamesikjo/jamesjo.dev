import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, PaletteMode } from "@mui/material";
import createEmotionCache from "../src/utils/createEmotionCache";
import globalTheme from "../styles/globalTheme";
import mailgo from "mailgo";

import "../styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

interface ColorModeContext {
  mode: PaletteMode;
  colorMode: { toggleColorMode: () => void };
}

export const ColorModeContext = React.createContext({} as ColorModeContext);

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [mode, setMode] = React.useState<PaletteMode>("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  React.useEffect(() => {
    mailgo({ showFooter: false });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={{ mode, colorMode }}>
        <ThemeProvider theme={globalTheme(mode)}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
};

export default MyApp;
