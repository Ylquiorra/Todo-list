import { selectByTestid } from "../../helpers/selectByTestid/selectByTestid"

export const getByTestId = (testId: string) => cy.get(selectByTestid(testId))

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(testId?: string): ReturnType<typeof cy.get>
    }
  }
}
