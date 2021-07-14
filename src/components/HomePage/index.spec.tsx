import React from 'react'
import { render, screen } from '@testing-library/react'
import { HomePage } from './index'

test('renders learn react link', () => {
  const wrapper = render(<HomePage />)

  const linkElement = screen.getByText(/learn react/i)

  expect(linkElement).toBeInTheDocument()

  expect(wrapper.asFragment()).toMatchSnapshot()
})
