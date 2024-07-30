///Create step definition file inputs.js in the support/step_definitions folder
///The file should contain the following steps:
///Import the InputsPage class from the page_objects folder
/// Import the Given, When, Then methods from the @badeball/cypress-cucumber-preprocessor package
///Create a Given step that opens the inputs page
///Create a When step that enters text in the input field
///Create a Then step that checks if the text is entered in the input field
///Export the steps

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const InputsPage = require('../../page_objects/InputsPage');

Given('I open the inputs page', () => {
    InputsPage.visit();
});

When ('I enter {string} in the input field', (text) => {
    InputsPage.enterText(text);
});

Then('I see the input with value {string}', (text) => {
    InputsPage.isEntered(text);
}); 

Then('I see the input field', () => {
    InputsPage.isInputFieldVisible();
})