import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react/dont-cleanup-after-each'
import { server } from '@app/react/src/mocks/server'
import 'jest-styled-components'
import 'mutationobserver-shim'

global.MutationObserver = global.window.MutationObserver

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

module.exports = {}

export default {}
