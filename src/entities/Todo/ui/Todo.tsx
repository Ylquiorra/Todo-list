import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox, Tooltip, Typography } from 'antd'
import { FC, ReactNode, memo, useCallback } from 'react'

import cls from './Todo.module.scss'

const { Text } = Typography

interface TodoProps {
  children: ReactNode
  checked?: boolean
  id?: string
  onChangeStatus?: any
  deleteTodo?: any
  messageAfterDelete?: any
}

export const Todo: FC<TodoProps> = memo((props) => {
  const { children, checked, id, onChangeStatus, deleteTodo, messageAfterDelete } = props

  const deleteTodoHandle = useCallback(() => {
    if (deleteTodo) {
      deleteTodo(id)
    }
    if (messageAfterDelete) {
      messageAfterDelete(id)
    }
  }, [deleteTodo, id, messageAfterDelete])

  return (
    <div data-testid='Todo' className={cls.Todo}>
      <Checkbox className={cls.checkbox} onChange={onChangeStatus} id={id} checked={checked}>
        <Text type={checked ? 'secondary' : undefined} delete={checked}>
          {children}
        </Text>
      </Checkbox>
      <Tooltip title="Delete">
        <DeleteOutlined data-testid='Todo.DeleteButton' onClick={deleteTodoHandle} className={cls.deleteIcon} />
      </Tooltip>
    </div>
  )
})
