const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const DragAndDropPage = require('../../page_objects/DragAndDropePage');

Given('I open the drag and drop page', () => {
    DragAndDropPage.visit();
}); 
    
When('I drag and drop element A to element B', () => {
    DragAndDropPage.dragAndDrop();
});
    

Then('element A should be dropped on element B', () => {
    DragAndDropPage.isDropped();
});

