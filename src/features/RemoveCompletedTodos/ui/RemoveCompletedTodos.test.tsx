import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'

import { RemoveCompletedTodos } from './RemoveCompletedTodos'

describe('RemoveCompletedTodos', () => {
  test('Render component', () => {
    render(<RemoveCompletedTodos />)

    expect(screen.getByTestId('RemoveCompletedTodos.Button')).toBeInTheDocument()
  })

  test('Button shoud be enabled', async () => {
    const testTodos = [{ id: '1', isChecked: true, text: 'Task 1' }]

    render(<RemoveCompletedTodos />, {
      wrapper: ({ children }) => <TodosContext.Provider value={{ todos: testTodos }}>{children}</TodosContext.Provider>,
    })

    const button = screen.getByTestId('RemoveCompletedTodos.Button')
    expect(button).toBeEnabled()
  })

  test('Button shoud be disabled', async () => {
    const testTodos = [{ id: '1', isChecked: false, text: 'Task 1' }]

    render(<RemoveCompletedTodos />, {
      wrapper: ({ children }) => <TodosContext.Provider value={{ todos: testTodos }}>{children}</TodosContext.Provider>,
    })

    const button = screen.getByTestId('RemoveCompletedTodos.Button')
    expect(button).toBeDisabled()
  })
})
