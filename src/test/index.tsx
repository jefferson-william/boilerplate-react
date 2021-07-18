import { render, queries, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Providers } from '~/test/Providers'
import { MyRenderOptions, MyRenderedOptions } from '~/test/index.d'
import customQueries, { MyQueries } from './custom-queries'

export const myRender = (
  Component: React.ReactElement,
  options: MyRenderOptions | undefined = {},
): [MyRenderResult, MyRenderedOptions] => {
  const allOptions = {
    ...options,
  }

  allOptions.theme = options?.theme || {}

  const rendered = render<MyQueries, HTMLElement>(Component, {
    wrapper: Providers(allOptions),
    queries: { ...queries, ...customQueries } as MyQueries,
  })

  return [rendered, allOptions]
}

export * from '@testing-library/react'

export type MyRenderResult = RenderResult<MyQueries, HTMLElement>

export { myRender as render, userEvent }
