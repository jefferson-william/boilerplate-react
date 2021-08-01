import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Button from './index'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Button,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log(20, err, info, props)
    return <div />
  },
})

export const { bootstrap, mount, unmount } = lifecycles
