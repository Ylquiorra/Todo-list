import { FC, memo } from 'react'
import { Typography } from 'antd'

const { Text } = Typography

interface ItemsCounterProps {
  counterValue: string
}

export const ItemsCounter: FC<ItemsCounterProps> = memo((props) => {
  const { counterValue } = props

  return <Text strong>{counterValue} items left</Text>
})
