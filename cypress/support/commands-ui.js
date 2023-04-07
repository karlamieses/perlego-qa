// ***********************************************
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getByTestId', (selector) => {
  cy.get(`[data-testid="${selector}"]`, {timeout: 8000})
})


Cypress.Commands.add('getByDataTestLocator', (selector) => {
  cy.get(`[data-test-locator="${selector}"]`)
})

Cypress.Commands.add('getByDataComponentLocator', (selector) => {
  cy.get(`[data-component-locator="${selector}"]`)
})


Cypress.Commands.add('uiLogin', (email, password = Cypress.env('testPassword')) => {
    cy.visit('/login')
    cy.get('[data-testid=CookieBanner-AcceptCookiesButton]:visible')
      .click()
    cy.getByDataTestLocator('input-email')
      .type(email)
    cy.getByTestId('LoginFormEmail-ContinueButton')
      .click()
    cy.getByDataTestLocator('password-input', { timeout: 8000 })
      .type(password)
    cy.getByTestId('LoginFormPassword-ContinueButton')
      .scrollIntoView()
      .click()
    cy.visit('/search')
})

Cypress.Commands.add('checkUrl', (url) => {
  cy.url().should('include', url)
})

Cypress.Commands.add('checkThereAreFivePageOfResults', () => {
    cy.get('body')
      .then(($body) => {
        if ($body.find('[data-component-locator="PaginationButton"]').length >= 4 && $body.find('[aria-label="Go to next page"]').length === 1) {
          cy.get('[aria-label="Go to next page"]')
            .should('exist')
        } else if ($body.find('[data-component-locator="PaginationButton"]').length <= 4 && $body.find('[aria-label="Go to next page"]').length === 0) {
          cy.log('Locator has less than 5 items');
        } else {
          cy.contains('No results found')
            .should('be.visible')
        }
      })
})

Cypress.Commands.add('deleteWorkspace', (auth, workspace_id) => { 
  cy.getCookie('auth-cookie').its('value').then((auth) => {  
    cy.url().then((url) => {
      cy.log(auth)
      const urlSegments = url.split('/')
      workspace_id = urlSegments[urlSegments.indexOf('workspace') + 1]
      cy.log(workspace_id)
      cy.apiDeleteWorkspace(auth, workspace_id)
    })
  })
})