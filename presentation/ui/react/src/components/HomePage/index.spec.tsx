import { render, screen } from '~/test'
import { HomePage } from './index'

test('renders learn react link', () => {
  const [wrapper] = render(<HomePage />)

  const linkElement = screen.getByText(/ui react home/i)

  expect(linkElement).toBeInTheDocument()

  expect(wrapper.asFragment()).toMatchSnapshot()
})