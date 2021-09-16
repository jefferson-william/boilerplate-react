const modules = [
  {
    name: 'IncrementeDecrement',
    path: './src/IncrementeDecrement.tsx',
  },
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
