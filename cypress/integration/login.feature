Feature: Login Feature

    Scenario: Login as an existing user
        Given I am on the login page
        When I enter my username and password and click on the login button
        Then I should be logged in and taken to home screen