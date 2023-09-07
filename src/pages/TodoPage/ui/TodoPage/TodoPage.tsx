import { FC, useState } from 'react'
import { Layout, Space, Typography } from 'antd'
import { AddTodo } from 'src/features/AddTodo'
import { RadioGroupSelect, RadioSelectTodoValue } from 'src/entities/RadioGroupSelect'
import { Page } from 'src/widgets/Page'

import { Todos } from '../Todos/Todos'
import cls from './TodoPage.module.scss'

export const TodoPage: FC = () => {
  const [selectedRadioSelect, setSelectedRadioSelect] = useState<string>(RadioSelectTodoValue.ALL)

  return (
    <Layout className={cls.layout}>
      <Page>
        <Space className={cls.mainSpace} direction="vertical" size={12}>
          <Typography.Title level={1}>Todo List</Typography.Title>
          <AddTodo height="50px" />
          <RadioGroupSelect
            updateRadioSelect={setSelectedRadioSelect}
            size="large"
            buttonStyle="solid"
            defaultValue={selectedRadioSelect}
          />
          <Typography.Title level={2}>All todos</Typography.Title>
          <Todos selctedFilter={selectedRadioSelect} />
        </Space>
      </Page>
    </Layout>
  )
}
