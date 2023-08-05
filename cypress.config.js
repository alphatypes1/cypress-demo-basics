module.exports = {
  ViewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["cypress/e2e/1-getting-started/*", "cypress/e2e/2-advanced-examples/*"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

//Cypress configuration goes into this file
//More info at https://docs.cypress.io/guides/references/configuration
