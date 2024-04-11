/* describe('template spec', () => { //example
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe('Fundamentals test', () => {
  beforeEach(() => {   //Se usa beforeEach porque en cada test estoy usando la misma url.
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals') //utilizo mi custum command
    cy.log('Selector utilizado:', 'fundamentals-header')
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})

