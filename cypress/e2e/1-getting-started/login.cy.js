it("Should open the main page", () => {
  cy.visit("/");
  cy.contains("Books list").should("be.visible");
});
