import { render, screen } from '~/test'
import { HomePage } from './index'

test('renders learn react link', () => {
  render(<HomePage />)

  const linkElement = screen.getByText(/material-ui/i)

  expect(linkElement).toBeInTheDocument()
})
