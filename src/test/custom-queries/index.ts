import { queries, Queries } from '@testing-library/react'
import * as ByInputName from './by-input-name'

const customQueries = {
  ...ByInputName,
}

type CustomQueries = typeof customQueries

export type TypeOfQueries = typeof queries

export type MyQueries = CustomQueries & TypeOfQueries & Queries

export default customQueries
