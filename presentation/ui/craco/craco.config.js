const singleSpaApplicationPlugin = require('craco-plugin-single-spa-application')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

const cracoDefaultConfig = {
  orgName: 'react',
  orgPackagesAsExternal: false,
  reactPackagesAsExternal: true,
  minimize: process.env.NODE_ENV === 'production',
  externals: ['react', 'react-router', 'react-router-dom', 'rxjs'],
}

function compileComponent(config) {
  return {
    plugin: singleSpaApplicationPlugin,
    options: {
      ...cracoDefaultConfig,
      ...config,
    },
  }
}

const componentsToBuildButCanOnlyAddOne = [
  compileComponent({
    projectName: 'button',
    entry: 'src/components/Button/single.spa.tsx',
  }),
]

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
    ...componentsToBuildButCanOnlyAddOne,
  ],
  webpack: {
    configure: (configuration) => {
      const config = configuration

      config.output.jsonpFunction = '@react'

      return config
    },
  },
}
