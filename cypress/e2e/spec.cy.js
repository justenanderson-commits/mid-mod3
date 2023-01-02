describe('Sick trick bruh', () => {
beforeEach(() => {
  cy.intercept('http://localhost:3001/api/v1/tricks', {
    method: "GET",
    fixture: "../fixtures/mock-data.json"
  })
  cy.visit('http://localhost:3000/')

})
  it('should have a title', () => {
    cy.contains('Sick Trick Wish List')
  })

  it('should contain a form with inputs', () => {
    cy.get('select[name="stance"]')
      .select[1].should("contain", "Regular") 
  })
})

