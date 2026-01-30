import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Then('el usuario deberia ver el dashboard', () => {
    // Validar que el login fue exitoso
    cy.url().should('include', '/inventory.html').wait(2000);
});


