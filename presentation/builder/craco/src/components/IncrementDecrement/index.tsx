import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import IncrementDecrement from '@app/react/components/IncrementDecrement'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: IncrementDecrement,
  errorBoundary() {
    return <div>This renders when a catastrophic error occurs</div>
  },
})

export const { bootstrap, mount, unmount } = lifecycles
