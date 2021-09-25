import React from 'react'
import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Home from '~/pages/index'
import Props from './index.d'

export const Routers: React.FC<Props> = ({ history }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </Router>
)
