import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Button from '.'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Button,
  errorBoundary() {
    return <div>This renders when a catastrophic error occurs</div>
  },
})

export const { bootstrap, mount, unmount } = lifecycles
