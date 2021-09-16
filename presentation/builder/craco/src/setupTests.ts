import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react/dont-cleanup-after-each'
import 'jest-styled-components'
import 'mutationobserver-shim'
import { server } from '@app/react/mocks/server'

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
