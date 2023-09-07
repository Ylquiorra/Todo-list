import { Button, message } from 'antd'
import { FC, memo, useCallback, useContext } from 'react'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'

interface RemoveCompletedTodosProps {
  type?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
}

export const RemoveCompletedTodos: FC<RemoveCompletedTodosProps> = memo((props) => {
  const { type = 'default' } = props
  const { todos, setTodos } = useContext(TodosContext)

  const hasCheckedTodo = todos?.some((todo) => todo.isChecked)

  const removeCompletedTodosHandler = useCallback(() => {
    if (setTodos) {
      setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isChecked))
      message.info('All completed tasks have been deleted')
    }
  }, [setTodos])

  return (
    <Button
      data-testid="RemoveCompletedTodos.Button"
      disabled={!hasCheckedTodo}
      onClick={removeCompletedTodosHandler}
      type={type}
      danger
    >
      Clear complited
    </Button>
  )
})
