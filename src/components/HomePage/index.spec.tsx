import { render, screen } from '~/test'
import { HomePage } from './index'

test('renders learn react link', () => {
  render(<HomePage />)

  const linkElement = screen.getByText(/learn react/i)

  expect(linkElement).toBeInTheDocument()
})
