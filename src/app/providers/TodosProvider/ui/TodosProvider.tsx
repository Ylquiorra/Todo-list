import { useMemo, useState, ReactNode } from 'react'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'
import { ITodos } from 'src/shared/types/TodosContext'

interface TodosProviderProps {
  children: ReactNode
}

const TodosProvider = (props: TodosProviderProps) => {
  const { children } = props

  const [todos, setTodos] = useState<ITodos[]>([
    { isChecked: false, text: 'Покушать', id: '1' },
    { isChecked: true, text: 'Написать тесты', id: '2' },
    { isChecked: false, text: 'Отдохнуть', id: '3' },
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
