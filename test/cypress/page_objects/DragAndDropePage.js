/// Create class DragAndDropPage in the page_objects folder that will autoamte the drag and drop feature
/// The class should be named DragAndDropPage.js
/// The class should use cypress commands to automate the drag and drop feature and contain general selectors and methods
/// draggedElementA, draggedElementB -   selectors shoud be store as variable in the class
/// visit() - should navigate to the drag and drop page
/// dragAndDrop() - should drag and drop the element
/// isDragged() - should check if the element is dragged
/// The class should be exported
/// The class should be imported in the step definition file
/// The class should be used in the step definition file
// // drag_and_drop.js

class DragAndDropPage {
    draggedElementA = '#column-a';
    draggedElementB = '#column-b';


    visit() {
        cy.visit('/drag_and_drop');
    }

    dragAndDrop() {
        cy.get(this.draggedElementA).trigger('mousedown');
        cy.get(this.draggedElementB).trigger('mousemove').trigger('mouseup');
    }

    isDropped() {
        cy.get(this.draggedElementB).should('have.text', 'A');
    }

}
module.exports = new DragAndDropPage();