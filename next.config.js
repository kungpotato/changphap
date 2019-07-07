const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
require('dotenv').config()

module.exports = withSass({
  //target: 'serverless',
  webpack: (config, { dev }) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
      return acc
    }, {})

    config.plugins.push(new webpack.DefinePlugin(env))

    if (dev) {
      config.module.rules.push(
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   loader: 'eslint-loader',
        //   options: {
        //     // eslint options (if necessary)
        //   },
        // },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {},
        }
      )
    }

    return config
  },
})
