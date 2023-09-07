import '@testing-library/jest-dom/extend-expect'

import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AddTodo } from './AddTodo'

describe('AddTodo', () => {
  test('Render component', () => {
    render(<AddTodo />)
    const input = screen.getByTestId('AddTodo.Input')
    const button = screen.getByTestId('AddTodo.Button')

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('Enter the value in the field and click on the button', async () => {
    render(<AddTodo />)
    const input = screen.getByTestId('AddTodo.Input')
    const button = screen.getByTestId('AddTodo.Button')

    await act(async () => {
      expect(button).toHaveAttribute('disabled')

      userEvent.type(input, 'RTL test message')

      expect(input).toHaveValue('RTL test message')
      expect(button).not.toHaveAttribute('disabled')

      userEvent.click(button)
      userEvent.clear(input)

      expect(button).toHaveAttribute('disabled')
    })
  })
})
