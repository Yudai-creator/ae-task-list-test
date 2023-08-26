// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Task List')
  })

  it('input clicks', () => {
    cy.get("#task-input").click()
    cy.contains('button', 'Ok')
  })
})
