import React from 'react'
// __tests__/fetch.test.js

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from './index'

describe('<Button/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
