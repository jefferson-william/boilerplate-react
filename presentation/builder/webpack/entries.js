const storeEntries = require('@app/core/store/entries')

const selfEntries = [
  {
    name: 'IncrementeDecrement',
    path: './src/IncrementeDecrement.tsx',
  },
]

const modules = [...selfEntries, ...storeEntries]

module.exports = modules
