const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const AddRemoveElementsPage = require('../../page_objects/AddRemoveElementsPage');

Given('I open the add remove elements page', () => {
  AddRemoveElementsPage.visit();
});

When('I add {int} elements', (count) => {
  AddRemoveElementsPage.addElements(count);
});

Then('I should see {int} delete buttons', (count) => {
  AddRemoveElementsPage.getDeleteButtons().should('have.length', count);
});

When('I remove {int} element', (count) => {
  AddRemoveElementsPage.removeElements(count);
});