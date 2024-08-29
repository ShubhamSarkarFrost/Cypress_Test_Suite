# cypress-e2e-testing-framework

<img src="https://www.cypress.io/_astro/navbar-brand.D87396b0.svg" alt="Cypress-Logo">

> Cypress test suite , with Page Object Model , hooks , screenshots and test vedios 

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/cucumber/json-formatter
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter
3. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)

## 🚀 Install the project

Install project dependencies with: npm install

## Run the demo:

1. Standard Execution: npm run cypress:execution
2. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open

## the Commands to Use

  1.  "cypress:runner": "cypress open --e2e --browser chrome", - Opens the Chrome in Head Mode
  2.  "cypress:execution-chrome": "cypress run --spec 'cypress/e2e/features/*' --browser chrome", - executes the test cases in chrome headless
  3.  "cypress:execution-firefox": "cypress run --spec 'cypress/e2e/features/*' --browser firefox", - executes the test cases in firefox headless
  4.  "cypress:execution-edge": "cypress run --spec 'cypress/e2e/features/*' --browser edge", - executes the test cases in edge headless
  5.  "cypress:execution-tags": "cypress run --env tags=@mobile",  - executes with tags
  6.  "cypress:execution-allure": "cypress run --env allure=true", - executes in electron browser in headless mode with allure reporter
  7.  "allure:setup": "node setup-allure.mjs", - gets the allure bin file for you 
  8.  "allure:clear": "rm -r allure-results/ allure-report cypress/screenshots || true", - clears the previous report
  9.  "allure:report": "allure generate allure-results --clean -o allure-report", - generates a new allure report
  10.  "allure:open": "allure open", - opens the allure port
  11.  "allure:history": "mv -f allure-report/history allure-results/history && rm -r allure-report || true", - to check the run history in allure
  12.  "allure:execute": "npm run cypress:execution-allure && npm run allure:report && npm run allure:open" - to execute the test reports with allure


