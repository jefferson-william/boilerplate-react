import 'single-spa-react'
import 'angular'
import 'angular-route'
import './components/App/app.module'
import './components/HomePage/index.component'
import './components/ShowCounterNumber/index.component'
import './routes/index.route'
import { registerApplication, start } from 'single-spa'

function registerReactComponents() {
  registerApplication(
    '@react/increment-decrement',
    (): any => System.import('@react/increment-decrement'),
    (location) => location.pathname === '/',
  )
}

function execute() {
  registerReactComponents()

  start()
}

execute()
