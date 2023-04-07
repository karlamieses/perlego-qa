import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the login page', () => {
    cy.visit('/login')
});
When('I enter my username and password and click on the login button', () => {
    cy.uiLogin(Cypress.env('my_perlego_account'))
})
Then('I should be logged in and taken to home screen', () => {
    cy.checkUrl('/home')
})