import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { DefaultSuspense } from '~/components/DefaultSuspense'
import { GlobalStyles } from '~/styles/global'
import { defaultTheme } from '~/styles/themes/default'
import history from '~/lib/history'
import '@app/react/i18n'
import { Routers } from '~/routers'

export const App: React.FC = () => {
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
