import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import { ItemsCounter } from './ItemsCounter'

describe('ItemsCounter', () => {
  test('Render component', () => {
    render(<ItemsCounter counterValue="3" />)

    expect(screen.getByText('3 items left')).toBeInTheDocument()
  })

  test('counterValue = 22', () => {
    render(<ItemsCounter counterValue="22" />)

    expect(screen.getByText('22 items left')).toBeInTheDocument()
  })
})
