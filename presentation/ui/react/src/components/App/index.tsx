import React from 'react'
import { hot } from 'react-hot-loader/root'
import IncrementDecrement from '../IncrementDecrement'

const Application: React.FC = () => {
  return (
    <div className="App">
      <main>
        <IncrementDecrement />
      </main>
    </div>
  )
}

export const App = hot(Application)
