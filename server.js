const next = require('next')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
// import App from 'next/app'
// import theme from './theme'

// function renderFullPage(html, css) {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title>My page</title>
//       <style id="jss-server-side">${css}</style>
//       <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'/>
//       <link
//         rel='stylesheet'
//         href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
//       />
//       <link
//         rel='stylesheet'
//         href='https://fonts.googleapis.com/icon?family=Material+Icons'
//       />
//       <link
//         href='https://fonts.googleapis.com/css?family=Mitr&display=swap'
//         rel='stylesheet'
//       />
//     </head>
//     <body>
//       <script async src="build/bundle.js"></script>
//       <div id="root">${html}</div>
//     </body>
//   </html>
//   `
// }

// function handleRender(req, res) {
//   const sheets = new ServerStyleSheets()
//   const html = renderToString(
//     sheets.collect(
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <App />
//       </ThemeProvider>
//     )
//   )
//   const css = sheets.toString()
//   res.send(renderFullPage(html, css))
// }

app
  .prepare()
  .then(() => {
    const server = express()
    const port = process.env.PORT || 3000

    // server.use('/build', express.static('build'))
    // server.use(handleRender)

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.get('/browse/:slug', (req, res) => {
      return app.render(req, res, '/browse', { slug: req.params.slug })
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:3000`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
