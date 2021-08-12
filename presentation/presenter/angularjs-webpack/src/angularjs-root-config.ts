import 'single-spa-react'
import 'angular'
import 'angular-route'
import './components/App/app.module'
import './components/HomePage/index.component'
import './components/ShowCounterNumber/index.component'
import './routes/index.route'
import { start } from 'single-spa'

start()
