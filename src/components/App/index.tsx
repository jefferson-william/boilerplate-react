import React from 'react'
import { hot } from 'react-hot-loader/root'
import history from '~/lib/history'
import { Routers } from '~/routers'
import { GlobalStyles } from '~/styles/global'
import { DefaultSuspense } from '~/components/DefaultSuspense'
import '~/i18n'

const Application: React.FC = () => {
  return (
    <DefaultSuspense>
      <Routers history={history} />
      <GlobalStyles />
    </DefaultSuspense>
  )
}

export const App = hot(Application)
