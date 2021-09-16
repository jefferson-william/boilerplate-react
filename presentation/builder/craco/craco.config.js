const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
const singleSpaApplicationPlugin = require('./craco-plugin-single-spa-application')
const rewireBabelLoader = require('craco-babel-loader-plugin')
const externals = require('./externals.json')
const entries = require('./entries.js')

module.exports = {
  plugins: [
    {
      plugin: rewireBabelLoader,
      options: {
        includes: [],
        excludes: [],
      },
    },
    {
      plugin: reactHotReloadPlugin,
    },
    {
      plugin: singleSpaApplicationPlugin,
      options: {
        orgName: 'react',
        projectName: '[name]',
        orgPackagesAsExternal: false,
        reactPackagesAsExternal: true,
        minimize: process.env.NODE_ENV === 'production',
        externals,
        entry: {
          main: './src/index.tsx',
          ...entries,
        },
      },
    },
  ],
  webpack: {
    configure: (configuration) => {
      const config = configuration

      config.output.jsonpFunction = '@react'

      return config
    },
  },
}
