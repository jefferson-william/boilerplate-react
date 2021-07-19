import React from 'react'
import { hot } from 'react-hot-loader/root'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import history from '@app/react/src/lib/history'
import { GlobalStyles } from '@app/react/src/styles/global'
import { defaultTheme } from '@app/react/src/styles/themes/default'
import { Routers } from '~/routers'
import { DefaultSuspense } from '~/components/DefaultSuspense'
import '~/i18n'

const Application: React.FC = () => {
  return (
    <DefaultSuspense>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <CssBaseline />
        <Routers history={history} />
      </ThemeProvider>
    </DefaultSuspense>
  )
}

export const App = hot(Application)
