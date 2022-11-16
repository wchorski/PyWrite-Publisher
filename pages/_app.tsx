import { useState, useEffect } from "react";
// import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "styles/ThemeConfig" 

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  // const [theme, setTheme] = useState("dark") 
  const [isLoaded, setisLoaded] = useState(false) 

  // const toggleTheme = () => {
  //   theme == 'light' ? setTheme('dark') : setTheme('light')
  // }

  useEffect(() => {
    // const prefTheme = window.matchMedia(`(prefers-color-scheme: dark)`).matches ? 'dark' : 'light'
    // setTheme(prefTheme)
    setisLoaded(true)
  }, [])
  

  return (
    <>
      <GlobalStyles />
      {/* <button onClick={toggleTheme} className="theme">Switch Theme</button> */}

      {isLoaded && <Component {...pageProps} />}

      {!isLoaded && <p>Loading...</p>}
    </>
  )
}

export default MyApp
