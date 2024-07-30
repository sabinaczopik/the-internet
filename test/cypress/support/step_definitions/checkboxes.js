const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const CheckboxesPage = require ('../../page_objects/CheckboxesPage');


Given('I open the checkboxes page', () => {
    CheckboxesPage.visit();
});

When('I check the first checkbox', () => {
    CheckboxesPage.checkFirstCheckbox();
});

When('I uncheck the first checkbox', () => {
    CheckboxesPage.uncheckFirstCheckbox();
});

When('I check all checkboxes', () => {
    CheckboxesPage.checkAllCheckboxes();
});

When('I uncheck all checkboxes', () => {
    CheckboxesPage.uncheckAllCheckboxes();
});

Then('the first checkbox should be checked', () => {
    CheckboxesPage.isFirstCheckboxChecked();
});

Then('the first checkbox should be unchecked', () => {
    CheckboxesPage.isFirstCheckboxUnchecked();
});

Then('all checkboxes should be checked', () => {
    CheckboxesPage.areAllCheckboxesChecked();
});

Then('all checkboxes should be unchecked', () => {
    CheckboxesPage.areAllCheckboxesUnchecked();
});