import React from 'react';
import { ThemeProvider, createTheme, Box } from "@mui/material";
import HeroSection from './components/HeroSection';

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
  },
})

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Box>
        <HeroSection/>
      </Box>
    </ThemeProvider>
  )
}

export default App;
