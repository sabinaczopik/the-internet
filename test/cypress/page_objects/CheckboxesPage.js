class CheckboxesPage {
checkboxes = 'input[type="checkbox"]';
  visit() {
	cy.visit('/checkboxes');
  }

  checkFirstCheckbox() {
	cy.get(this.checkboxes).first().check();
  }

  uncheckFirstCheckbox() {
	cy.get(this.checkboxes).first().uncheck();
  }

  checkAllCheckboxes() {
	cy.get(this.checkboxes).each(($el) => {
        cy.wrap($el).check();
    });
  }

  uncheckAllCheckboxes() {
	cy.get(this.checkboxes).each(($el) => {
        cy.wrap($el).uncheck();
    });
  }

  isFirstCheckboxChecked() {
	cy.get(this.checkboxes).first().should('be.checked');
  }

  isFirstCheckboxUnchecked() {
	cy.get(this.checkboxes).first().should('not.be.checked');
  }

  areAllCheckboxesChecked() {
	cy.get(this.checkboxes).each(($el) => {
	  cy.wrap($el).should('be.checked');
	});
  }

  areAllCheckboxesUnchecked() {
	cy.get(this.checkboxes).each(($el) => {
	  cy.wrap($el).should('not.be.checked');
	});
  }
}

module.exports = new CheckboxesPage ();