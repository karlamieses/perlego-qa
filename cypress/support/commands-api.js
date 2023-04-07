// ***********************************************
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('apiLogin', (email, password = Cypress.env('testPassword')) => {
  cy.session([email, password], () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('apiLoginEndpoint'),
      body: {
        "email": email,
        "password": password,
        "persistent_login": "true"
      }
    }).then((response) => {
      cy.setCookie('auth-cookie', response.body.data.jwt_token)
      cy.log(response.body.data.jwt_token)
    })
  })
})

Cypress.Commands.add('apiCreateAccount', (email, password = Cypress.env('testPassword')) => { 
  cy.request({
    method: 'POST',
    url: Cypress.env('apiCreateAccountEndpoint'),
    body: { 
      "first_name": "QA",
      "last_name": "Team",
      "email": email,
      "password": password,
      "g_recaptcha_response": "03AKH6MRFqhZKf4xJm9BrWWf6i6UaHGGT8EBFXjINPzoNKUat2gWnedEns74kUdbnNAYJQIouoQ5WcmzHtj_wD9LTqQ6GqzDzeaVS37ovaBOIoJ4nFJ8XnF3ycZeHj3u3g6YkzvIAlwkj7JV2CIvkmZ6VUMc9C8AU-6xu-XRFDtB81VhFSLzw1tNtuUKPKEp-GoKvuvSg0sK8pZTPe06kN2VkXOX-ub_2rRQ66R8JrED-4uXCJbF_EGMZSfxtRvZmE9T2jmmf-WIqwwmPEJ0eabGt31zGPn4LDBgpaqPy3Yjh7iDfIeirX-l-39KAbcCKddbRCPdhc9sWQitAVpYfmnFJNUG6R6a_TLCW_XUzdWBnpBO8Cs7mDvAsgDFCLF6IkzbUQ1TjYmkZYtM_YfQwtjeofyCIo_rm3tmYTd7Y1ba5umWCLzf7KE_4jxcraa3m6Twc1wM0INVdpFYi22Ewrgt4sMITdDZvgLJthyJ5-7DZcb6-moIkh1bBQHjb1SCxqgbf7F5qg63QqbyvA1lnltUtqJonxTUUz8Q",
      "organisation_id": "kRfe+Wf+nsyt4vM3RIyRnA==",
      "marketingConsent": false,
      "merchantEntitlementId": null,
      "access_code": "HGR897"
    }
  })
})

Cypress.Commands.add('apiCreateWorkspace', (auth) => { 
  cy.request({
    method: 'POST',
    url: Cypress.env('apiWorkspaceEndpoint'),
    headers: { 
      authorization: 'Bearer ' + auth
    },
    body: { 
        "title": "QA Workspace",
        "description": "This is done through API",
        "isPublic": false,
        "author": "Karla Mieses"
    }
  })
})

Cypress.Commands.add('apiDeleteWorkspace', (auth, workspace_id) => { 
  cy.request({
    method: 'DELETE',
    url: Cypress.env('apiDeleteEndpoint') + '?workspace_ids='+workspace_id,
    headers: { 
      authorization: 'Bearer ' + auth
    }
  })
})

