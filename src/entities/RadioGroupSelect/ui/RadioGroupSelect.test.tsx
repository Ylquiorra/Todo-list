import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import { RadioGroupSelect } from './RadioGroupSelect'
import { GroupSelect, RadioSelectTodoValue } from '../types'

const groupSelect: GroupSelect[] = [
  { selectName: 'all', selectValue: RadioSelectTodoValue.ALL },
  { selectName: 'active', selectValue: RadioSelectTodoValue.ACTIVE },
  { selectName: 'complited', selectValue: RadioSelectTodoValue.COMPLITED },
]

describe('RadioGroupSelect', () => {
  test('Render component', () => {
    render(<RadioGroupSelect defaultValue={groupSelect[0].selectName} />)
    expect(screen.getByText('all')).toBeInTheDocument()
    expect(screen.getByText('active')).toBeInTheDocument()
    expect(screen.getByText('complited')).toBeInTheDocument()
  })

  test('All is selected', () => {
    render(<RadioGroupSelect defaultValue={groupSelect[0].selectName} />)

    const element = screen.queryAllByTestId('RadioGroupSelect.Button')[0]
    expect(element.getAttribute('value')).toBe('all')
    expect(element.parentElement?.classList.contains('ant-radio-button-checked')).toBe(true)
  })

  test('Complited is selected', () => {
    render(<RadioGroupSelect defaultValue={groupSelect[2].selectName} />)

    const element = screen.queryAllByTestId('RadioGroupSelect.Button')[2]
    expect(element.getAttribute('value')).toBe('complited')
    expect(element.parentElement?.classList.contains('ant-radio-button-checked')).toBe(true)
  })
})
