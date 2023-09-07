import { Radio, RadioChangeEvent } from 'antd'
import { FC, memo, useCallback } from 'react'

import { GroupSelect, RadioSelectTodoValue } from '../types'

interface RadioGroupSelectProps {
  defaultValue: string
  buttonStyle?: 'outline' | 'solid'
  size?: 'small' | 'middle' | 'large'
  updateRadioSelect?: (value: RadioSelectTodoValue) => void
}

const groupSelect: GroupSelect[] = [
  { selectName: 'all', selectValue: RadioSelectTodoValue.ALL },
  { selectName: 'active', selectValue: RadioSelectTodoValue.ACTIVE },
  { selectName: 'complited', selectValue: RadioSelectTodoValue.COMPLITED },
]

export const RadioGroupSelect: FC<RadioGroupSelectProps> = memo((props) => {
  const { defaultValue, buttonStyle, size = 'middle', updateRadioSelect } = props

  const onChangeSelect = useCallback(
    (event: RadioChangeEvent) => {
      if (updateRadioSelect) {
        updateRadioSelect(event.target.value)
      }
    },
    [updateRadioSelect],
  )

  return (
    <Radio.Group
      data-testid="RadioGroupSelect"
      onChange={onChangeSelect}
      size={size}
      defaultValue={defaultValue}
      buttonStyle={buttonStyle}
    >
      {groupSelect.map((select) => (
        <Radio.Button data-testid="RadioGroupSelect.Button" key={select.selectValue} value={select.selectValue}>
          {select.selectName}
        </Radio.Button>
      ))}
    </Radio.Group>
  )
})
