![image](https://user-images.githubusercontent.com/38430731/230515044-05a012f7-efa5-4e35-bb1c-4b849f8a3b7b.png)


# 📚💻 perlego-qa
This repository contains E2E testing utilizing Cypress for the Perlego app.


### 💻 Content
- 🪴 Testing Approach 
- 🪴 Prerequisites
- 🚀 Install
- 😄 Rules 
- 👾 CI
- ⚠️ Disclaimer


### 🪴 How to navigate in the file
When running or launching the cypress runner, you will see Cucumber files that are located under
cypress/integration and files under cypress/e2e. 
This repo has a mix of Cucumber technique and traditional approach. 

Note: 
The following specs are failing:
- account-creation.cy.js: due to Captcha verification
- workspace.cy.js: due to unknown reasons, this only fails in CI

### 🪴 Prerequisites 
Step 1. env local (required)
Go into ./ and copy the contents of env.sample into env

### 🚀 Install
Execute `yarn` in project root

### 😄 Rules 
Follow this commit pattern:

type: subject
(type = test/maintenance/refactor/chore)

test: add test to workspace
maintenance: daily run fix for broken tests
refactor: workspace code refactor
chore: adding readme file

### 👾 CI
GitHub Actions
Cypress Dashboard

### 👾 Running test
From the root project run the following command to launch the cypress runner: yarn cypress open
From the root project run the following command to run cypress headless: yarn cypress run

### ⚠️ Disclaimer
This is my first time utilizing BDD with Cypress. 



