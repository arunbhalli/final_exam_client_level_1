describe('Use can see list of movies', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays a list of movies', () => {
    cy.get('[data-cy=list-of-movies]').should('contain', 'list-of-movies')
  })
  it('it displays a list with 10 items', () => {
    cy.get('[data-cy=list-of-movies]').should('have.length',10)
  })
  it('is expected to display the info of expected movies', () => {
    cy.get('[data-cy=list-of-movies]').within(()=>{
      cy.get('[data-cy=container-1-movie]').should
    })
  })
});
