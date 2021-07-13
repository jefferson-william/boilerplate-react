import React from 'react'
import { hot } from 'react-hot-loader/root'
import history from '~/lib/history'
import { Routers } from '~/routers'
import { GlobalStyles } from '~/styles/global'

const Application: React.FC = () => {
  return (
    <>
      <Routers history={history} />
      <GlobalStyles />
    </>
  )
}

export const App = hot(Application)
