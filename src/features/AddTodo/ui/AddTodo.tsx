import { Input, Button, Space, message } from 'antd'
import { FC, memo, useCallback, useContext, useState } from 'react'
import { TodosContext } from 'src/shared/lib/context/TodosContext/TodosContext'

import cls from './AddTodo.module.scss'

interface AddTodoProps {
  height?: string
}

export const AddTodo: FC<AddTodoProps> = memo((props) => {
  const { height = undefined } = props
  const [inputValue, setInputValue] = useState<string>('')
  const { setTodos } = useContext(TodosContext)

  const onChangeInputValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }, [])

  const addTodoHandle = useCallback(() => {
    if (setTodos) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now().toString(),
          isChecked: false,
          text: inputValue,
        },
      ])
      message.info(`A task «${inputValue}» has been added`)
      setInputValue('')
    }
  }, [inputValue, setTodos])

  return (
    <Space.Compact className={cls.AddTodo}>
      <Input
        data-testid="AddTodo.Input"
        value={inputValue}
        onChange={onChangeInputValue}
        style={{ height }}
        placeholder="What needs to be done?"
      />
      <Button
        data-testid="AddTodo.Button"
        onClick={addTodoHandle}
        disabled={!inputValue.length}
        style={{ height }}
        type="primary"
      >
        Add todo
      </Button>
    </Space.Compact>
  )
})
