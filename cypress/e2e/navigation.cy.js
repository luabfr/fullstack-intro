describe('navigation test', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get("[data-id='button-cypress']").click()    
    cy.get("[data-id='div-test']").should("be.visible")
    cy.get("[data-id='button-cypress']").click()    
    cy.get("[data-id='div-test']").should("not.be.exist")
    
  })
})