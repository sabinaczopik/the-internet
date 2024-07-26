const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the homepage', () => {
  cy.visit('https://example.cypress.io');
});

Then('I see the title {string}', (title) => {
  cy.title().should('include', title);
});