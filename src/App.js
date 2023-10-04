import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/assets/sections/Navbar";

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
    <> 
    <ThemeProvider theme={theme}>
        <Navbar/>
    </ThemeProvider>
    </>
  )
}

export default App;
