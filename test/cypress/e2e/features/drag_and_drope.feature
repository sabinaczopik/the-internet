Feature: Drag and Drop
    As a user
    I want to drag and drop elements on the page
    So that I can verify the functionality of drag and drop

    Scenario: Drag and drop elements
        Given I open the drag and drop page
        When I drag and drop element A to element B
        Then element A should be dropped on element B

