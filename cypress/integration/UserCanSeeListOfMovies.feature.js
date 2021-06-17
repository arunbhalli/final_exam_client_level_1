describe('Use can see list of movies', () => {
  beforeEach(() => {
    cy.intercept('Get', 'https://content.viaplay.se/pc-se/serier/samtliga', {
      fixture: 'listOfSerier.json',
    });
    cy.visit('/');
  });
  it('displays a list of movies', () => {
    cy.get('[data-cy=list-of-movies]').should('contain', 'List of Movies');
  });
  it('it displays a list with 10 items', () => {
    cy.get('[data-cy=list-of-movies]').should('have.length', 10);
  });
  it('is expected to display the info of expected movies', () => {
    cy.get('[data-cy=list-of-movies]').within(() => {
      cy.get('[data-cy=container-1-movie]')
        .first()
        .find('.title')
        .should(
          'contain',
          'TV-serier online - Streama bra serier på nätet el ladda ned'
        );
    });
  });
});
