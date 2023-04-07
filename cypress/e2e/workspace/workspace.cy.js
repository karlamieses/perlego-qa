/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'

let workspace_id;

slowCypressDown(500);
describe('Workspace', () => {

  before(() => {
    cy.apiLogin(Cypress.env('my_perlego_account'))

    cy.getCookie('auth-cookie').its('value').then((auth) => {
      cy.apiCreateWorkspace(auth)
    })
    cy.visit('/')
    cy.contains('QA Workspace')
      .should('be.visible')
      .click()
  })
  it('should add books to a workspace through Perlego Library and book can be deleted', () => {
    cy.getByDataTestLocator('SidebarListItem-Link').last()
      .click()
    cy.getByTestId('Workspace-ResourceItem')
      .should('not.exist')
    cy.getByTestId('Workspace-AddContent')
      .click()
    cy.getByTestId('DropdownItem').first()
      .click()
    cy.getByTestId('BookGridItem').first()
      .trigger('mouseover')
    cy.get('[id="menu-options"]')
      .click()
    cy.getByTestId('ResourceActivity-WorkspaceListItem')
      .click()
    cy.getByDataTestLocator('SidebarListItem-Link').last()
      .click()
    cy.getByTestId('Workspace-ResourceItem')
      .should('exist')
    cy.deleteWorkspace()
    cy.reload()
    cy.getByTestId('Workspace-ResourceItem')
      .should('not.exist')
    cy.checkUrl('/home')
  })
})