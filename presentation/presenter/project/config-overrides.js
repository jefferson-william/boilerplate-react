const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const { override, removeModuleScopePlugin } = require('customize-cra')
const { paths } = require('react-app-rewired')
const rewireAliases = require('react-app-rewire-aliases')
const path = require('path')

module.exports = override((config, env) => {
  let configuration = { ...config }

  removeModuleScopePlugin()(configuration)

  configuration = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appPublic}`),
    '~': path.resolve(__dirname, `${paths.appSrc}`),
  })(config, env)

  if (env === 'development') {
    configuration.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }

  configuration = rewireReactHotLoader(configuration, env)

  return configuration
})
