Cypress.Commands.add('screenshotWithDate', (stepName) => {
    const epochTime = Date.now(); // Get current epoch time
  const screenshotName = `${stepName} -- ${epochTime}`;
  cy.screenshot(screenshotName, { capture: 'fullPage' });
  });