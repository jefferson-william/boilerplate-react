import React from 'react'
import { hot } from 'react-hot-loader/root'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import history from '~/lib/history'
import { Routers } from '~/routers'
import { GlobalStyles } from '~/styles/global'
import { defaultTheme } from '~/styles/themes/default'
import { DefaultSuspense } from '~/components/DefaultSuspense'
import '~/i18n'
import '~/export-out'

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
