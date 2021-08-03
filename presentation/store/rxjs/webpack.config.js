const path = require('path')
const webpack = require('webpack')
const externals = require('./externals.json')
const entries = require('./entries.js')

process.env.NODE_ENV = 'production'

module.exports = (env) => {
  const config = {
    context: __dirname,
    mode: 'production',
    entry: entries,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
      libraryTarget: 'system',
    },
    externals,
    module: {
      rules: [
        { parser: { system: false } },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: __dirname,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
      runtimeChunk: undefined,
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        chunks: 'async',
        cacheGroups: { default: false },
      },
    },
    plugins: [],
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      overlay: false,
      disableHostCheck: true,
      port: 8000,
      sockHost: 'localhost',
      sockPort: 8000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  }

  return config
}
