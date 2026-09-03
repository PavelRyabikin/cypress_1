describe("Books tests", () => {
  it("Should add book", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.addBook("Приключения", "Очень интересная", "Вася Пупкин");
  });

  it("Should add book to favorite", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.addBookToFavorite();
    cy.visit("/favorites");
    cy.contains(".card-title", "Приключения").should("be.visible");
  });

  it("Should delete book from favorite", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.removeBookFromFavorite();
    cy.visit("/favorites");
    cy.contains(".card-title", "Приключения").should("not.exist");
  });
});
