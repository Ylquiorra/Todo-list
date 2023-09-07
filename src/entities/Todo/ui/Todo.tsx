import { DeleteOutlined } from '@ant-design/icons'
import { Checkbox, Tooltip, Typography } from 'antd'
import { FC, ReactNode, memo, useCallback } from 'react'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

import cls from './Todo.module.scss'

const { Text } = Typography

interface TodoProps {
  children: ReactNode
  checked?: boolean
  id?: string
  onChangeStatus?: (event: CheckboxChangeEvent) => void
  deleteTodo?: (id: string) => void
  messageAfterDelete?: (id: string) => void
}

export const Todo: FC<TodoProps> = memo((props) => {
  const { children, checked, id, onChangeStatus, deleteTodo, messageAfterDelete } = props

  const deleteTodoHandle = useCallback(() => {
    if (deleteTodo) {
      deleteTodo(id ?? '0')
    }
    if (messageAfterDelete) {
      messageAfterDelete(id ?? '0')
    }
  }, [deleteTodo, id, messageAfterDelete])

  return (
    <div data-testid="Todo" className={cls.Todo}>
      <Checkbox className={cls.checkbox} onChange={onChangeStatus} id={id} checked={checked}>
        <Text type={checked ? 'secondary' : undefined} delete={checked}>
          {children}
        </Text>
      </Checkbox>
      <Tooltip title="Delete">
        <DeleteOutlined data-testid="Todo.DeleteButton" onClick={deleteTodoHandle} className={cls.deleteIcon} />
      </Tooltip>
    </div>
  )
})
