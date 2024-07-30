Feature: Inputs
    As a user
    I want to be able to interact with inputs
    So that I can input data

    Scenario: Check if input is visible
        Given I open the inputs page
        Then I see the input field

    Scenario: Type in the input
        Given I open the inputs page
        When I enter "2" in the input field
        Then I see the input with value "2"
