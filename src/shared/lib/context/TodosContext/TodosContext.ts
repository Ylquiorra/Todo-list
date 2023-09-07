import { createContext } from 'react'
import { ITodos } from 'src/shared/types/TodosContext'

interface TodosContextProps {
  todos?: ITodos[]
  setTodos?: React.Dispatch<React.SetStateAction<ITodos[]>>
}

const initialContextValue: TodosContextProps = {
  todos: [],
  setTodos: () => {},
}

export const TodosContext = createContext(initialContextValue)
