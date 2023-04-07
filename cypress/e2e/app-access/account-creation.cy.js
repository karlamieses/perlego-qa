/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

const randomEmail = faker.internet.email()
const randomName = faker.name.firstName()
const randomLastName = faker.name.lastName()

describe('Demo account creation', () => {

    before(() => {
        cy.visit('/group-register?orgt1=kRfe+Wf+nsyt4vM3RIyRnA==&regcode=HGR897')
    })
    it('should create a new account', () => { 
        cy.getByTestId('checkbox-terms-conditions')
          .click({force: true})
        cy.getByTestId('b2b-creation-call-to-action-button')
          .click()
        cy.getByDataTestLocator('input-firstName')
          .type(randomName)
        cy.getByDataTestLocator('input-lastName')
            .type(randomLastName)
        cy.getByDataTestLocator('input-email')
            .type(randomEmail)
        cy.getByDataTestLocator('input-confirmationEmail')
            .type(randomEmail)
        cy.getByDataTestLocator('password-input')
           .type(Cypress.env('testPassword'))
        cy.getByTestId('CreateAccountButton')
          .click()

        cy.contains('Welcome to Perlego', {timeout: 120000})
          .click()
        
          cy.get('[data-testid="welcome"] a') //Let's get started
            .click()
         cy.getByDataTestLocator('SelectionCardWrapper').eq(3)
           .click()
        cy.contains('button', 'Next step')
          .click()
        
        cy.getByDataTestLocator('SearchableInputWrapper')
          .click()
        
        cy.getByDataTestLocator('OptionWrapper').first()
          .click()

        cy.contains('button', 'Finish')
          .click()

          cy.get('[data-testid="WelcomeWrapper"] a') //Click on Explore recommendations
          .click()

          cy.checkUrl('/home')
        
        cy.getByTestId('Sidebar-CreateFirstWorkspace', {timeout: 120000})
          .click()

        cy.getByDataTestLocator('input-title')
          .type('Testing Workspace')
        cy.getByTestId('Modal-InputWorkspaceDescription')
          .type('This workspace is created by automation testing')
        cy.getByTestId('Modal-Submit')
            .click()

        cy.checkUrl('/workspace/')
    })
})