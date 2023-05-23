import { createTheme, css } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ededed",
      main: "#d1d1d1",
      dark: "#777777",
    },
    secondary: {
      main: "#5c5c5c",
      light: "#bababa",
    },
    background: {
      default: "#d1d1d1",
    },
  },
  typography: {
    fontFamily: `"Montserrat"`,
    subtitle1: {
      fontSize: "15px",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#fff",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        text: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#fff",
          },
        },
      },
    },
  },
});

export const globalStyles = css`
  :root {
    body {
      background-color: #1d1d20;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #1d1d20;
    }
  }
`;

export default theme;
