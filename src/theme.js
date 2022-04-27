import { createTheme } from "@material-ui/core/styles";

let theme = createTheme({
  palette: {
    primary: {
      light: "#ededed",
      main: "#2b2b2b",
      dark: "#777777",
    },
    secondary: {
      main: "#777777",
      light: "#bababa",
    },
  },
  typography: {
    fontFamily: ["Poppins, Montserrat, serif"],
    h6: {
      fontSize: "1.3em",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#2b2b2b",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
        },
        text: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1300px",
        },
      },
    },
  },
});

export default theme;
