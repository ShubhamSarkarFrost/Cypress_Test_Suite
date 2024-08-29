import { After } from '@badeball/cypress-cucumber-preprocessor';

After(function () {
  const stepName = this.currentTest.title; // Gets the name of the current step
  cy.screenshotWithDate(stepName);
});