import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
