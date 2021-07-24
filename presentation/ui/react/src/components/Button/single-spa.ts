import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Button from './index'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Button,
})

export const { bootstrap, mount, unmount } = lifecycles
