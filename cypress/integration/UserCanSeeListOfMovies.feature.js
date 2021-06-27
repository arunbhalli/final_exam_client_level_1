describe('Use can see list of movies', () => {
  beforeEach(() => {
    cy.intercept('Get', 'https://content.viaplay.se/pc-se/serier/samtliga', {
      fixture: 'listOfSerier.json',
    });
    cy.visit('/');
  });
  it('it displays a list with 10 items', () => {});
  it('is expected to display the info of expected movies', () => {
    cy.get('[data-cy=fetch-data]').click();
    cy.get('[data-cy=img-of-series]').should('be.visible');
    cy.get('[data-cy=title]').should(
      'contain',
      'Max Anger - With One Eye Open'
    );
    cy.get('[data-cy=no-of-series]').should('contain', '1');
    cy.get('[data-cy=series-length]').should('have.length', 10);
  });
});
