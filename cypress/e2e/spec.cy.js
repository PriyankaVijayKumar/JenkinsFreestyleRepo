describe('templated experience', () => {
  it('login', () => {
    cy.visit('https://automation-te-themes.qa-pathfactory.com/users/sign_in')
    cy.get('[id="login-data"]').type('cy-admin')
    cy.get('[id="password"]').type('Cypress1234')
    cy.get('#input-button').click()
    cy.url().should('include', '/authoring')
  })
})