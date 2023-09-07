import { useMemo, useState, ReactNode } from 'react'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'
import { ITodos } from 'src/shared/types/TodosContext'

interface TodosProviderProps {
  children: ReactNode
}

const TodosProvider = (props: TodosProviderProps) => {
  const { children } = props

  const [todos, setTodos] = useState<ITodos[]>([
    { isChecked: false, text: 'Write tests for this project', id: '1' },
    { isChecked: true, text: 'Complete this test task', id: '2' },
    { isChecked: false, text: 'Take a walk on the street', id: '3' },
    { isChecked: true, text: 'Drink some water', id: '4' },
  ])

  const defaultProps = useMemo(
    () => ({
      todos,
      setTodos,
    }),
    [todos],
  )

  return <TodosContext.Provider value={defaultProps}>{children}</TodosContext.Provider>
}

export default TodosProvider
