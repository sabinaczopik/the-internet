Feature: Check and uncheck checkboxes

    Background:
        Given I open the checkboxes page

    Scenario: Check a checkbox
        When I check the first checkbox
        Then the first checkbox should be checked

    Scenario: Uncheck a checkbox
        When I uncheck the first checkbox
        Then the first checkbox should be unchecked

    Scenario: Check all checkboxes
        When I check all checkboxes
        Then all checkboxes should be checked

    Scenario: Uncheck all checkboxes
        When I uncheck all checkboxes
        Then all checkboxes should be unchecked