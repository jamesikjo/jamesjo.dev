import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const globalTheme = createTheme({
  palette: {
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
      light: blue[400],
      main: blue[500],
      dark: blue[700],
    },
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
            color: blue[800],
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
            color: blue[800],
          },
        },
      },
    },
  },
});

export default globalTheme;
