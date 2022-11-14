import { useState } from "react";
import '../styles/globals.scss'
// import  '../styles/theme.css'
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig" 

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState("dark") 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
