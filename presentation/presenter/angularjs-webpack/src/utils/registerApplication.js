import { registerApplication as spaRegisterApplication } from 'single-spa'

const applicationsRegisteredNames = []

export const getRegisteredApplicationNames = () => Object.freeze(applicationsRegisteredNames)

export const registerApplication = (name, activate) => {
  const applicationIsRegistered = applicationsRegisteredNames.indexOf(name) >= 0
  if (!applicationIsRegistered) {
    applicationsRegisteredNames.push(name)
    spaRegisterApplication(name, () => System.import(name), activate)
  }
}
