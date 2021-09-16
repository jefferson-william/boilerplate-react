import { render, screen } from '@app/react/test'
import { HomePage } from './index'

test('renders learn react link', () => {
  const [wrapper] = render(<HomePage />)

  const linkElement = screen.getByText(/material-ui/i)

  expect(linkElement).toBeInTheDocument()

  expect(wrapper.asFragment()).toMatchSnapshot()
})
