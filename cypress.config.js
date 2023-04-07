const { defineConfig } = require("cypress");
const configWithDotenv = require('dotenv').config()

module.exports = defineConfig({
  projectId: "2mg4eh",
  chromeWebSecurity: false,
  watchForFileChanges: false,
  experimentalInteractiveRunEvents: true,
  screenshotOnRunFailure: false,
  waitForAnimations: true,
  requestTimeout: 100000,
  pageLoadTimeout: 180000,
  viewportWidth: 1536,
  viewportHeight: 960,
  blockHosts: [ 
    // '*trustpilot.com',
    '*google-analytics.com',
    // '*perlego.com/catalogue-service/v1/topics',
    // '*doubleclick.net',
    // '*sentry.io',
    // '*algolia.net',
    // '*algolianet.com'
  ],
  env:{
    testPassword:"perlego@123",
    apiLoginEndpoint:"https://auth.perlego.com/login",
    apiCreateAccountEndpoint:"https://api.perlego.com/user-v2/v2/b2b-user",
    apiWorkspaceEndpoint:"https://api.perlego.com/workspace/workspace",
    apiDeleteEndpoint:"https://api.perlego.com/workspace/workspaces",
    waitForCatalogue:"https://api.perlego.com/catalogue-service/v1/topics",
    my_perlego_account: process.env.MY_PERLEGO_ACCOUNT,
    my_perlego_password: process.env.MY_PERLEGO_PASSWORD,
    cypress_record_key: process.env.CYPRESS_RECORD_KEY,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

   baseUrl: 'https://www.perlego.com/',
  },
});