describe('Home Page', () => {
  it('has welcome message', () => {
    cy.visit('http://localhost:4231');
    cy.contains('Welcome to');
  })
})
