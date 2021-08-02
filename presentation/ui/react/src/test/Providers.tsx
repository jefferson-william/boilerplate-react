import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MemoryRouter } from 'react-router-dom'
import { MyRenderOptions } from '@app/react/src/test/props.d'

export function Providers(allOptions: MyRenderOptions | undefined = {}): React.FC {
  const Wrap: React.FC = ({ children }) => {
    return (
      <MemoryRouter {...allOptions.memoryRouterOptions}>
        <ThemeProvider theme={allOptions.theme || {}}>{children}</ThemeProvider>
      </MemoryRouter>
    )
  }

  return Wrap
}
