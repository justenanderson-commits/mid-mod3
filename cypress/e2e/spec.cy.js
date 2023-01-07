// * Write tests covering what should be displayed on the page when the user first visits.
// * Write a test that checks that when data is put into the form, the value is reflected in that form input.
// * Write a test to check the user flow of adding a new trick to the DOM.

describe('Sick trick bruh', () => {
  it('should have a title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('Sick Trick Wish List')
    cy.get('[name="stance"]').should('be.visible')
    cy.get('[name="name"]').should('be.visible')
    cy.get('[name="obstacle"]').should('be.visible')
    cy.get('[name="tutorial"]').should('be.visible')
    cy.get('[type="submit"]').should('be.visible')
    cy.get('.trick-container').should('be.visible').contains('treflip')
    cy.get('.trick-container').contains('heelflip')
    cy.get('.trick-container').contains('frontside 50-50, backside 180 out')
  })

  it('should have inputs that hold data', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="stance"]').select(1).should('have.value', 'Regular')
    cy.get('[name="name"]').type('Fall down').should('have.value', 'Fall down')
    cy.get('[name="obstacle"]').select(1).should('have.value', 'Flatground')
    cy.get('[name="obstacle"]').select(3).should('have.value', 'Rail')
    cy.get('[name="tutorial"]')
      .type('Blah blah')
      .should('have.value', 'Blah blah')
  })

  it('should update the Trick Card Container when a new trick is added', () => {
    cy.intercept('http://localhost:3001/api/v1/tricks/', {
      method: 'GET',
      fixture: '../fixtures/mock-data.json',
    })
    cy.visit('http://localhost:3000/')
    cy.get('[name="stance"]').select(1).should('have.value', 'Regular')
    cy.get('[name="name"]').type('Fall down').should('have.value', 'Fall down')
    cy.get('[name="obstacle"]').select(1).should('have.value', 'Flatground')
    cy.get('[name="obstacle"]').select(3).should('have.value', 'Rail')
    cy.get('[name="tutorial"]')
      .type('Blah blah')
      .should('have.value', 'Blah blah')
    cy.get('[data-cy="send-it"]').click()
    cy.intercept('http://localhost:3001/api/v1/tricks/', {
      method: 'GET',
      fixture: '../fixtures/mock-data-2.json',
    })
    cy.get('.trick-container').contains('Fall down')
  })
})
