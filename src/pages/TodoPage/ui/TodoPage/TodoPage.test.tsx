import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'
import { ITodos } from 'src/shared/types/TodosContext'

import { TodoPage } from './TodoPage'

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
const setTodosMock = jest.fn()

describe('TodoPage', () => {
  test('Renders the TodoPage component', () => {
    render(<TodoPage />, {
      wrapper: ({ children }) => <TodosContext.Provider value={{ todos: mockTodos }}>{children}</TodosContext.Provider>,
    })

    const title = screen.getByText('Todo List')
    const subTitle = screen.getByText('All todos')
    const addTodoInput = screen.getByTestId('AddTodo.Input')
    const addTodoButton = screen.getByTestId('AddTodo.Button')
    const todos = screen.getAllByTestId('Todo')
    const select = screen.getByTestId('RadioGroupSelect')
    const removeCompletedTodosButton = screen.getByTestId('RemoveCompletedTodos.Button')

    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
    expect(addTodoInput).toBeInTheDocument()
    expect(addTodoButton).toBeInTheDocument()
    expect(addTodoButton).toBeDisabled()
    expect(todos).toHaveLength(9)
    expect(select).toBeInTheDocument()
    expect(removeCompletedTodosButton).toBeInTheDocument()
  })

  test('Add new todo', async () => {
    render(<TodoPage />, {
      wrapper: ({ children }) => (
        <TodosContext.Provider value={{ todos: mockTodos, setTodos: setTodosMock }}>{children}</TodosContext.Provider>
      ),
    })
    const addTodoInput = screen.getByTestId('AddTodo.Input')
    const addTodoButton = screen.getByTestId('AddTodo.Button')

    await act(async () => {
      userEvent.type(addTodoInput, 'new todo')
      userEvent.click(addTodoButton)

      expect(setTodosMock).toHaveBeenCalledTimes(1)
    })
  })

  test('Change select tab form all to active', async () => {
    render(<TodoPage />, {
      wrapper: ({ children }) => (
        <TodosContext.Provider value={{ todos: mockTodos, setTodos: setTodosMock }}>{children}</TodosContext.Provider>
      ),
    })

    const selectButtons = screen.queryAllByTestId('RadioGroupSelect.Button')
    const todos = screen.getAllByTestId('Todo')

    expect(selectButtons[0].getAttribute('value')).toBe('all')
    expect(selectButtons[0].parentElement?.classList.contains('ant-radio-button-checked')).toBe(true)
    expect(todos).toHaveLength(9)


    await act(async() => {
      if (selectButtons[1].parentElement) {
        userEvent.click(selectButtons[1].parentElement)
      }
      expect(selectButtons[1].getAttribute('value')).toBe('active')
      expect(selectButtons[1].parentElement?.classList.contains('ant-radio-button-checked')).toBe(true)
      expect(screen.getAllByTestId('Todo')).toHaveLength(5)
    })
  })
})
