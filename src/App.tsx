import React, { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Paper } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import getTheme from '../src/theme'

import RoutesComponents from './router/RoutesComponents'
import { app } from './configuration'

const App: FC = (props) => {
  const { children } = props

  const gtmScript = app.GTM_ID && (
    <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${app.GTM_ID}');`}</script>
  )

  const gtmNoScript = app.GTM_ID && (
    <noscript>
      <iframe
        title="gtm"
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
        height="0"
        width="0"
        style={{
          display: 'none',
          visibility: 'hidden',
        }}
      />
    </noscript>
  )

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet defaultTitle="boilerplate-react-js - App">{gtmScript}</Helmet>
        <StylesProvider injectFirst>
          <StyledThemeProvider theme={getTheme()}>
            <ThemeProvider theme={getTheme()}>
              <CssBaseline />
              <Paper elevation={0}>{children}</Paper>
              <RoutesComponents />
            </ThemeProvider>
          </StyledThemeProvider>
        </StylesProvider>
        {gtmNoScript}
      </HelmetProvider>
    </React.Fragment>
  )
}

export default App
