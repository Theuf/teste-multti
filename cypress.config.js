const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      "viewportWidth"; 1333,
      "viewportHeight"; 660,
      "baseurl"; "https://app-hml.contabilhub.com.br/home"
    },
  },
});
