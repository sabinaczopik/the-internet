class AddRemoveElementsPage {
    addElementsBtn = 'button[onclick="addElement()"]'
    deleteBtn = 'button[onclick="deleteElement()"]'
  visit() {
	cy.visit('/add_remove_elements/');
  }

  addElements(count) {
	for (let i = 0; i < count; i++) {
	  cy.get(this.addElementsBtn).click();
	}
  }

  removeElements(count) {
	for (let i = 0; i < count; i++) {
	  cy.get(this.deleteBtn).first().click();
	}
  }

  getDeleteButtons() {
	return cy.get(this.deleteBtn);
  }
}

module.exports = new AddRemoveElementsPage();