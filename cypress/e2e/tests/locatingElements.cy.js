describe('Locating web elements', () => {
  it('get', () => {
    cy.visit('http://zero.webappsecurity.com/');
    cy.get('#signin_button'); //Get one or more DOM elements by selector or alias with id="signin_button"
    cy.get('[id="signin_button"]');
    cy.get('li');
  });
  it('contains', () => {
    cy.visit('http://zero.webappsecurity.com/');
    cy.contains('Signin'); //Get the DOM element containing the text. "Signin". Case sensitive
    cy.contains('Zero');
  });
  it('find', () => {
    cy.visit('http://zero.webappsecurity.com/');
    cy.get('[class="navbar-inner"]').find('[type="button"]'); //Get the descendent DOM elements of a specific selector.
  });
});
