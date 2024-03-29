import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Routers from "./routers";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
