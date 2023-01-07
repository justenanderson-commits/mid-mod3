describe('Sick trick bruh', () => {
  it('should have a title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Sick Trick Wish List')
    cy.get('[name="stance"]').should('be.visible')
    cy.get('[name="name"]').should('be.visible')
    cy.get('[name="obstacle"]').should('be.visible')
    cy.get('[name="tutorial"]').should('be.visible')
    cy.get('[type="submit"]').should('be.visible')
    cy.get('.trick-container')
      .should('be.visible')
      .contains("treflip")
    cy.get('.trick-container')
      .contains("heelflip")
    cy.get('.trick-container')
      .contains("frontside 50-50, backside 180 out")
})
    
  })



// * Write tests covering what should be displayed on the page when the user first visits.
// * Write a test that checks that when data is put into the form, the value is reflected in that form input.
// * Write a test to check the user flow of adding a new trick to the DOM.