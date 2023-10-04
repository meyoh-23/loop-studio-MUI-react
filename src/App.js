import { ThemeProvider, createTheme } from "@mui/material";

// modified theming for the app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        Room landing page
      </div>
    </ThemeProvider>
  )
}

export default App;
