import { Space, Typography, message } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { FC, memo, useCallback, useContext } from 'react'
import { ItemsCounter } from 'src/entities/ItemsCounter'
import { RadioSelectTodoValue } from 'src/entities/RadioGroupSelect'
import { Todo } from 'src/entities/Todo'
import { RemoveCompletedTodos } from 'src/features/RemoveCompletedTodos'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'
import { ITodos } from 'src/shared/types/TodosContext'

interface TodosProps {
  selctedFilter: string
}

export const Todos: FC<TodosProps> = memo((props) => {
  const { selctedFilter } = props
  const { todos, setTodos } = useContext(TodosContext)

  const onChangeTodoStatus = useCallback(
    (event: CheckboxChangeEvent) => {
      const currentCheckbox = event?.target
      const isCheckedCurrentTodo = todos?.find((todo) => todo.id === currentCheckbox.id)

      if (setTodos) {
        setTodos((prevTodos: ITodos[]) =>
          prevTodos.map((todo) => {
            if (todo.id === currentCheckbox.id) {
              return { ...todo, isChecked: !todo.isChecked }
            }
            return todo
          }),
        )

        if (!isCheckedCurrentTodo?.isChecked) {
          message.success(`The task «${isCheckedCurrentTodo?.text}» was completed`)

        }
      }
    },
    [setTodos, todos],
  )

  const deleteTodoHandle = useCallback(
    (id: string) => {
      if (setTodos) {
        setTodos((prevTodos: ITodos[]) => prevTodos.filter((todo) => todo.id !== id))
      }
    },
    [setTodos],
  )

  let filteredTodos = todos
  switch (selctedFilter) {
    case RadioSelectTodoValue.ACTIVE:
      filteredTodos = todos?.filter((todo) => !todo.isChecked)
      break
    case RadioSelectTodoValue.COMPLITED:
      filteredTodos = todos?.filter((todo) => todo.isChecked)
      break
    default:
  }

  const renderMessageAfterDeleteTodo = useCallback((id: string) => {
    const deletedTask = todos?.find((todo) => todo.id === id)
    message.info(`A task «${deletedTask?.text}» has been added`)
  }, [todos])

  const renderFilteredTodos = filteredTodos?.map((todo) => (
    <Todo
      deleteTodo={deleteTodoHandle}
      messageAfterDelete={renderMessageAfterDeleteTodo}
      onChangeStatus={onChangeTodoStatus}
      id={todo.id}
      key={todo.id}
      checked={todo.isChecked}
    >
      {todo.text}
    </Todo>
  ))

  return (
    <Space direction="vertical" size={10}>
      {filteredTodos?.length ? renderFilteredTodos : <Typography.Text data-testid='Todos.NoTasksMessage' italic>There are no tasks</Typography.Text>}
      <ItemsCounter counterValue={filteredTodos?.length.toString() ?? '0'} />
      <RemoveCompletedTodos type="dashed" />
    </Space>
  )
})
