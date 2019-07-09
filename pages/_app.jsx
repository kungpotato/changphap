import React from 'react'
import App, { Container } from 'next/app'
import '../styles/styles.scss'
import { ThemeProvider } from '@material-ui/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import theme from '../theme'
import DateFnsUtils from '@date-io/date-fns'
import thLocale from 'date-fns/locale/th'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={thLocale}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    )
  }
}

export default MyApp
