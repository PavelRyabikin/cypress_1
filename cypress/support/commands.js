// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("loginWithEmptyEmail", (password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(" ");
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("loginWithEmptyPassword", (email) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (title, description, author) => {
  cy.get("body").then(($body) => {
    const bookExists = [...$body.find(".card-title")].some(
      (book) => book.innerText.trim() === title,
    );

    if (!bookExists) {
      cy.contains("Add new").click();
      cy.get('[name="title"]').type(title);
      cy.get(':nth-child(2) > [name="description"]').type(description);
      cy.get('[name="authors"]').type(author);
      cy.contains("Submit").click();
    }
  });
});

Cypress.Commands.add("addBookToFavorite", () => {
  cy.get(".card-footer > .btn").then(($button) => {
    if ($button.text().trim() === "Add to favorite") {
      cy.wrap($button).click();
    }
  });
});

Cypress.Commands.add("removeBookFromFavorite", () => {
  cy.get(".card-footer > .btn").then(($button) => {
    if ($button.text().trim() === "Delete from favorite") {
      cy.wrap($button).click();
    }
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
