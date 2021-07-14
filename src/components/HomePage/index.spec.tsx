import React from 'react'
import { render, screen } from '@testing-library/react'
import { HomePage } from './index'

test('renders learn react link', () => {
  render(<HomePage />)

  const linkElement = screen.getByText(/material-ui/i)

  expect(linkElement).toBeInTheDocument()
})
