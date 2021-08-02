import { queryHelpers, buildQueries, Matcher, MatcherOptions } from '@testing-library/react'

const queryAllByInputName = (
  container: HTMLElement,
  id: Matcher,
  options: MatcherOptions | undefined = undefined,
): HTMLElement[] => queryHelpers.queryAllByAttribute('name', container, id, options)

const getMultipleError = (_: HTMLElement, value: string) =>
  `Found multiple elements with the [name='${value}'] attribute`
const getMissingError = (_: HTMLElement, value: string) =>
  `Unable to find an element with the [name='${value}'] attribute`

const [queryByInputName, getAllByInputName, getByInputName, findAllByInputName, findByInputName] = buildQueries(
  queryAllByInputName,
  getMultipleError,
  getMissingError,
)

export { queryByInputName, queryAllByInputName, getByInputName, getAllByInputName, findAllByInputName, findByInputName }
