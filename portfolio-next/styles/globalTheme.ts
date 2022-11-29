import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const globalTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              light: "#ededed",
              main: "#2b2b2b",
              dark: "#777777",
            },
            secondary: {
              main: "#5c5c5c",
              light: "#bababa",
            },
            info: {
              main: "#2196f3",
            },
            background: {
              default: "#F9FAFB",
            },
          }
        : {
            primary: {
              light: "#ededed",
              main: "#F2F5F7",
              dark: "#777777",
            },
            secondary: {
              main: "#B2B9C0",
              light: "#bababa",
            },
            info: {
              main: "#2196f3",
            },
            text: {
              primary: "#2b2b2b",
            },
            background: {
              default: "#0E141B",
              paper: "#182635",
            },
          }),
    },
    typography: {
      fontFamily: `"Poppins"`,
      h6: {
        fontSize: "1.3em",
      },
      subtitle1: {
        lineHeight: 1.85,
      },
      subtitle2: {
        lineHeight: 1.85,
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "transparent",
              color: blue[500],
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            borderRadius: "3px",
          },
          text: {
            "&:hover": {
              backgroundColor: "transparent",
              color: blue[500],
            },
          },
        },
      },
    },
  });

export default globalTheme;
