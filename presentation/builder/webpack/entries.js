const storeEntries = require('@app/core/store/entries')
const angularjsWebpackEntries = require('@app/angularjs-webpack/entries')

const selfEntries = [
  {
    name: '@app/react/components/IncrementDecrement',
    path: './src/react/IncrementDecrement.tsx',
  },
]

const modules = [...selfEntries, ...angularjsWebpackEntries, ...storeEntries]

module.exports = modules
