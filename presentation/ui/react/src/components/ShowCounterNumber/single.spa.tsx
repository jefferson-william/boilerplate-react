import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import ShowCounterNumber from '.'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ShowCounterNumber,
  domElementGetter: () => document.getElementById('react-show-counter-number') as HTMLElement,
  errorBoundary() {
    return <div>This renders when a catastrophic error occurs</div>
  },
})

export const { bootstrap, mount, unmount } = lifecycles
