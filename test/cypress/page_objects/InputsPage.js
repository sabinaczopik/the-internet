/// Create class InputsPage in the page_objects folder that will autoamte the inputs feature
/// The class should be named InputsPage.js 
/// The class should use cypress commands to automate the inputs feature and contain general selectors and methods 
/// inputField -   selectors shoud be store as variable in the class
/// visit() - should navigate to the inputs page
/// enterText() - should enter text in the input field
/// isEntered() - should check if the text is entered
/// The class should be exported as module  
/// The class should be imported in the step definition file    
/// The class should be used in the step definition file
// // inputs.js
class InputsPage {
    inputField = 'input[type="number"]';

    visit() {
        cy.visit('/inputs');
    }

    enterText(text) {
        cy.get(this.inputField).type(text);
    }

    isEntered(text) {
        cy.get(this.inputField).should('have.value', text);
    }

    isInputFieldVisible() {
        cy.get(this.inputField).should('be.visible');
    }
}

module.exports = new InputsPage();