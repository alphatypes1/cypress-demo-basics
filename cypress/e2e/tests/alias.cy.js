describe('Use of alias', () => {
  it('Accessing a DOM element with alias', () => {
    cy.visit('https://www.google.com/');
    cy.get('[type="search"][name="q"]').as('searchbox');
    cy.get('@searchbox').type(
      "Alp's Cypress demo is showing me how aliases work! {enter}",
      { delay: 40 }
    );
  });
});
