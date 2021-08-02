import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button from '../Button'
import Text from '../Text'

const Application: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Button />
        <Text />
      </main>
    </div>
  )
}

export const App = hot(Application)
