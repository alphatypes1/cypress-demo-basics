describe('Checkbox', () => {
  it('Checking and asserting checkboxes', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
    cy.get('#user_remember_me').as('checkbox').check();
    cy.get('@checkbox').should('be.checked');
    cy.get('@checkbox').uncheck();
    cy.get('@checkbox').should('not.be.checked');
  });
});
