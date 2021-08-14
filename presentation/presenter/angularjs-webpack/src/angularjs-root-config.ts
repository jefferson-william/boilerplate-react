import 'single-spa-angularjs'
import 'single-spa-react'
import 'angular'
import 'angular-route'
import './components/app.module'
import './components/home-page'
import './components/counter-page'
import './components/show-counter-number'
import './routes/index.route'
import { start } from 'single-spa'

start()
