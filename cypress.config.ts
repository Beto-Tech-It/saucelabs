import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.ts",

    async setupNodeEvents(on, config) {
      // 👇 Primero agrega el plugin de Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // 👇 Luego configura el preprocessor
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],  // ✅ Pasa 'config' aquí
        })
      );

      // Configuración de step definitions
      config.env = {
        ...config.env,
        stepDefinitions: "cypress/e2e/web/steps/**/*.ts",
      };

      return config;  // ✅ Importante: retorna config
    },
  },

  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  screenshotOnRunFailure: true,
});