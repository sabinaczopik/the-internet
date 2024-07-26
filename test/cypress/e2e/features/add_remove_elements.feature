Feature: Add and Remove Elements
    As a user
    I want to add and remove elements on the page
    So that I can verify the functionality of adding and removing elements

    Scenario: Add elements
        Given I open the add remove elements page
        When I add 2 elements
        Then I should see 2 delete buttons

    Scenario: Remove elements
        Given I open the add remove elements page
        When I add 2 elements
        And I remove 1 element
        Then I should see 1 delete buttons

    Scenario: Remove all elements
        Given I open the add remove elements page
        When I add 2 elements
        And I remove 2 element
        Then I should see 0 delete buttons