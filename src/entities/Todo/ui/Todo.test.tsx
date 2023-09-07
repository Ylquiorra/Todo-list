import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import { Todo } from './Todo'

const checkedTodo = { isChecked: true, text: 'Написать тесты', id: '2' }
const uncheckedTodo = { isChecked: false, text: 'Отдохнуть', id: '3' }

describe('Todo', () => {
  test('Render component with text', () => {
    render(<Todo>Test</Todo>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  test('The element must be in the del tag', () => {
    render(
      <Todo id={checkedTodo.id} checked={checkedTodo.isChecked}>
        {checkedTodo.text}
      </Todo>,
    )
    const element = screen.getByText('Написать тесты')

    expect(element.tagName).toBe('DEL')
    expect(element.textContent).toBe('Написать тесты')
    expect(element.parentElement?.classList.contains('ant-typography-secondary')).toBe(true)
  })
  test('The element must be in the del tag', () => {
    render(
      <Todo id={uncheckedTodo.id} checked={uncheckedTodo.isChecked}>
        {uncheckedTodo.text}
      </Todo>,
    )
    const element = screen.getByText('Отдохнуть')

    expect(element.tagName).toBe('SPAN')
    expect(element.textContent).toBe('Отдохнуть')
    expect(element.parentElement?.classList.contains('ant-typography-secondary')).toBe(false)
    expect(element.parentElement?.classList.contains('ant-checkbox-checked')).toBe(false)
  })
})
