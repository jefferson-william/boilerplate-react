const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const { override, removeModuleScopePlugin } = require('customize-cra')
const { paths } = require('react-app-rewired')
const rewireAliases = require('react-app-rewire-aliases')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const path = require('path')

// const multipleEntry = require('react-app-rewire-multiple-entry')([
//   {
//     entry: `${paths.appSrc}/components/Button/index.tsx`,
//   },
// ])

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

  configuration.plugins.push(
    new WebpackAssetsManifest({
      output: 'assets-manifest.json',
      // customize(entry, original, manifest, asset) {
      //   return {
      //     key: entry.key,
      //     value: entry.value,
      //   }
      // },
      // transform(assets, manifest) {
      //   return {
      //     files: assets,
      //   }
      // },
    }),
  )

  // multipleEntry.addMultiEntry(configuration)
  // console.log(configuration)
  // throw new Error()

  return configuration
})
