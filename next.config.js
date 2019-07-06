const webpack = require('webpack')
const withLess = require('@zeit/next-less')
require('dotenv').config()

module.exports = withLess({
  //target: 'serverless',
  webpack: (config, { dev }) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))

    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      })
    }

    return config
  },
})
