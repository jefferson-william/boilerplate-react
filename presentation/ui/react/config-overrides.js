const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const { paths } = require('react-app-rewired')
const rewireAliases = require('react-app-rewire-aliases')
const reactAppRewireBuildDev = require('react-app-rewire-build-dev')
const path = require('path')

module.exports = {
  webpack(config, env) {
    let configuration = rewireAliases.aliasesOptions({
      '@': path.resolve(__dirname, `${paths.appPublic}`),
      '~': path.resolve(__dirname, `${paths.appSrc}`),
    })(config, env)

    if (env === 'development') {
      configuration.resolve.alias['react-dom'] = '@hot-loader/react-dom'
    }

    configuration = rewireReactHotLoader(configuration, env)

    configuration = reactAppRewireBuildDev(config, env, {
      outputPath: 'build',
      basename: 'static',
      hotReloadPort: 9000,
    })

    configuration.output.futureEmitAssets = false
    configuration.output.jsonpFunction = '@react'
    configuration.output.libraryTarget = 'system'
    configuration.externals = {
      rxjs: 'rxjs',
    }

    return configuration
  },
  devServer(configFunction) {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost)

      config.disableHostCheck = true
      config.sockHost = 'localhost'
      config.sockPort = process.env.PORT
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      }

      return config
    }
  },
}
