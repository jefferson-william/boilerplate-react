const entries = require('../entries')

const getModules = () => {
  const mapConfig = {}
  entries.forEach((mod) => {
    mapConfig[`${mod.name}`] = mod.path
  })
  return mapConfig
}

module.exports = {
  getModules,
}
