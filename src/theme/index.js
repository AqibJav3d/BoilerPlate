import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "poppins",
    color: " #1E1E1E",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: " 0.03em",
    h1: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 72,
    },
    h2: {
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 57,
    },
    h3: {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 42,
    },
    h4: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 27,
    },
    h5: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 24,
    },
    h6: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 21,
    },
  },
});
export default theme;
