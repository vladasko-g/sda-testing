const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3003",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    viewportHeight: 900,
    viewportWidth: 600,
  },
});
