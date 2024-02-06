import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { CurriculoProvider } from 'src/contexts/curriculo.context'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CurriculoProvider>
        <Component {...pageProps} />
      </CurriculoProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
