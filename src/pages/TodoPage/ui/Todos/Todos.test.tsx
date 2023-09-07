import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import { RadioSelectTodoValue } from 'src/entities/RadioGroupSelect'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'
import { ITodos } from 'src/shared/types/TodosContext'

import { Todos } from './Todos'

const mockTodos: ITodos[] = [
  { id: '1', isChecked: true, text: 'Task 1' },
  { id: '2', isChecked: true, text: 'Task 2' },
  { id: '3', isChecked: true, text: 'Task 3' },
  { id: '4', isChecked: true, text: 'Task 4' },

  { id: '5', isChecked: false, text: 'Task 5' },
  { id: '6', isChecked: false, text: 'Task 6' },
  { id: '7', isChecked: false, text: 'Task 7' },
  { id: '8', isChecked: false, text: 'Task 8' },
  { id: '9', isChecked: false, text: 'Task 9' },
]

describe('Todos', () => {
  test('Render component with all tab', () => {
    render(<Todos selctedFilter={RadioSelectTodoValue.ALL} />, {
      wrapper: ({ children }) => <TodosContext.Provider value={{ todos: mockTodos }}>{children}</TodosContext.Provider>,
    })
    const todos = screen.getAllByTestId('Todo')

    expect(todos).toHaveLength(9)
  })

  test('Render component with active tab', () => {
    render(<Todos selctedFilter={RadioSelectTodoValue.ACTIVE} />, {
      wrapper: ({ children }) => <TodosContext.Provider value={{ todos: mockTodos }}>{children}</TodosContext.Provider>,
    })
    const todos = screen.getAllByTestId('Todo')

    expect(todos).toHaveLength(5)
  })

  test('Render component with complited tab', () => {
    render(<Todos selctedFilter={RadioSelectTodoValue.COMPLITED} />, {
      wrapper: ({ children }) => <TodosContext.Provider value={{ todos: mockTodos }}>{children}</TodosContext.Provider>,
    })
    const todos = screen.getAllByTestId('Todo')

    expect(todos).toHaveLength(4)
  })
})
