describe('Todo page', () => {
  it('Add new taks', () => {
    cy.visit('')
    cy.getByTestId('AddTodo.Input').type('new task')
    cy.getByTestId('AddTodo.Button').click()
    cy.getByTestId('Todo').should('have.length', 4)
  })

  it('Delete task', () => {
    cy.visit('')
    cy.getByTestId('Todo.DeleteButton').eq(2).click()
    cy.getByTestId('Todo').should('have.length', 2)
  })

  it('Delete checked tasks', () => {
    cy.visit('')
    cy.getByTestId('Todo').eq(0).find('input[type="checkbox"]').click();
    cy.getByTestId('RemoveCompletedTodos.Button').click()
    cy.getByTestId('Todo').should('have.length', 1)
  })

  it('Change select tabs', () => {
    cy.visit('')
    cy.getByTestId('Todo').should('have.length', 3)
    cy.get('[data-testid="RadioGroupSelect"] > :nth-child(2)').click()
    cy.getByTestId('Todo').should('have.length', 2)
    cy.get('[data-testid="RadioGroupSelect"] > :nth-child(3)').click()
    cy.getByTestId('Todo').should('have.length', 1)
  })

  it('The state when there are no tasks', () => {
    cy.visit('')
    cy.getByTestId('RemoveCompletedTodos.Button').click()
    cy.get('[data-testid="RadioGroupSelect"] > :nth-child(3)').click()
    cy.getByTestId('Todos.NoTasksMessage').should('exist')
  })
})
