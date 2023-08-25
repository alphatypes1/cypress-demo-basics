describe('Checkbox', () => {
  it('Checking and asserting checkboxes', () => {
    cy.visit('http://zero.webappsecurity.com');
    cy.get('#signin_button').should('be.visible');

    cy.get('#searchTerm').should('be.visible');
    cy.get('#homeMenu').should('be.visible');
  });
});
