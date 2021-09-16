const path = require('path')
const { getModules } = require('./config/module-builder.config')

module.exports = {
  mode: 'production',
  entry: getModules(),
  externals: ['react', 'react-router', 'react-router-dom', 'rxjs', 'styled-components', '@app/rxjs/counter'],
  output: {
    filename: '[name].[contenthash].js',
    library: { type: 'system' },
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'window',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
}
