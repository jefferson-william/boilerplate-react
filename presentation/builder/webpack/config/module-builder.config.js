const storeEntries = require('@app/core/store/entries')

const modules = [
  {
    name: 'IncrementeDecrement',
    path: './src/IncrementeDecrement.tsx',
  },
  ...storeEntries,
]

const getModules = () => {
  const mapConfig = {}
  modules.forEach((mod) => {
    mapConfig[`${mod.name}`] = mod.path
  })
  return mapConfig
}

module.exports = {
  getModules,
}
