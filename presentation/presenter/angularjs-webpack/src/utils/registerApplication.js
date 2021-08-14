import {
  unregisterApplication as spaUnregisterApplication,
  registerApplication as spaRegisterApplication,
} from 'single-spa'
import { listApplications } from './listApplicationsToRegister'

let applicationsRegisteredNames = []

export const getRegisteredApplicationNames = () => Object.freeze(applicationsRegisteredNames)

const activateApplicationByRoutes = (application) => (location) => application.routesToActivate
// application.routesToActivate.some((route) => location.pathname === route)

export const unregisterApplication = (applicationName) => {
  const applicationIsRegistered = applicationsRegisteredNames.indexOf(applicationName) >= 0
  if (applicationIsRegistered) {
    applicationsRegisteredNames = applicationsRegisteredNames.filter((appName) => appName !== applicationName)
    spaUnregisterApplication(applicationName)
  }
}

export const registerApplication = (applicationName) => {
  const application = listApplications[applicationName]
  const applicationIsRegistered = applicationsRegisteredNames.indexOf(applicationName) >= 0
  if (!applicationIsRegistered) {
    applicationsRegisteredNames.push(applicationName)
    spaRegisterApplication(
      applicationName,
      () => System.import(applicationName),
      activateApplicationByRoutes(application),
    )
  }
}
