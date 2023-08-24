describe('Checkbox', () => {
  it('Checking and asserting checkboxes', () => {
    cy.visit('http://zero.webappsecurity.com');
    cy.get('#signin_button').should('be.visible');
  });
});
