import 'single-spa-react'
import 'angular'
import 'angular-route'
import './components/App/app.module'
import './components/HomePage/index.component'
import './components/ShowCounterNumber/index.component'
import './routes/index.route'
import { registerApplication, start } from 'single-spa'
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout'
import microfrontendLayout from './microfrontend-layout.html'

function registerAllComponentsByHtmlLayout() {
  const routes = constructRoutes(microfrontendLayout)
  const applications = constructApplications({
    routes,
    loadApp({ name }) {
      return System.import(name)
    },
  })
  const layoutEngine = constructLayoutEngine({ routes, applications })
  applications.forEach(registerApplication)
  layoutEngine.activate()
}

function registerReactComponents() {
  // registerApplication(
  //   'react-increment-decrement',
  //   (): any => System.import('@react/increment-decrement'),
  //   (location) => location.pathname === '/',
  // )
}

function execute() {
  registerAllComponentsByHtmlLayout()
  registerReactComponents()
  start()
}

execute()
