describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h4').should('have.text', 'Fathead Solutions')
  })
})
