import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Text from '.'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Text,
  errorBoundary() {
    return <div>This renders when a catastrophic error occurs</div>
  },
})

export const { bootstrap, mount, unmount } = lifecycles
