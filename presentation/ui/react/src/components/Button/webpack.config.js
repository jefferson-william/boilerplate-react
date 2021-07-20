const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'app__react',
    projectName: 'react__button',
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    externals: ['react', 'react-dom', 'styled-components', 'rxjs', 'single-spa-react'],
  })
}
