const next = require('next')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
// import App from 'next/app'
// import theme from './theme'

// function renderFullPage(html, css) {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>My page</title>
//         <style id="jss-server-side">${css}</style>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//       </body>
//     </html>
//   `
// }

// function handleRender(req, res) {
//   const sheets = new ServerStyleSheets()
//   const html = renderToString(
//     sheets.collect(
//       <ThemeProvider theme={theme}>
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

    // server.use('/build', express.static('build'))
    // server.use(handleRender)

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.get('/browse/:slug', (req, res) => {
      return app.render(req, res, '/post', { slug: req.params.slug })
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
