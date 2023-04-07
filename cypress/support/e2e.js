// Import commands.js using ES2015 syntax:
import './commands-api'
import './commands-ui'

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/

Cypress.on('uncaught:exception', (err, runnable) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
    return false
  })
