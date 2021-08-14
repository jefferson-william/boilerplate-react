import 'single-spa-react'
import 'angular'
import 'angular-route'
import './components/app/app.module'
import './components/home-page'
import './components/counter-page'
import './components/show-counter-number'
import './routes/index.route'
import * as app from './components/app/single.spa'
import { start, registerApplication } from 'single-spa'

registerApplication({
  name: 'app',
  app,
  activeWhen: () => true,
})

start()
