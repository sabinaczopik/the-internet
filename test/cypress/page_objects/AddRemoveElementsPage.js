class AddRemoveElementsPage {
  visit() {
	cy.visit('/add_remove_elements/');
  }

  addElements(count) {
	for (let i = 0; i < count; i++) {
	  cy.get('button[onclick="addElement()"]').click();
	}
  }

  removeElements(count) {
	for (let i = 0; i < count; i++) {
	  cy.get('.added-manually').first().click();
	}
  }

  getDeleteButtons() {
	return cy.get('.added-manually');
  }
}

module.exports = new AddRemoveElementsPage();