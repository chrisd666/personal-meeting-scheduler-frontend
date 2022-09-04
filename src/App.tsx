import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
