import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/login.pages";
import { IngresoCredenciales } from "../pages/login.pages";

const loginPage = new LoginPage();
const ingresoCredenciales = new IngresoCredenciales();


Given('que el usuario se encuentra en la pagina inicial de saucedemo', () => {
    loginPage.visit();
});

When('ingresa correctamente las credenciales validas',() =>{

    ingresoCredenciales.loguearConCredencialesUnicas();

})


When('ingresa correctamente el user {string} y el password {string}', (user: string, password: string) => {
  ingresoCredenciales.loguearConVariados(user, password);
});

Then('el usuario deberia ver el dashboard', () => {
    // Validar que el login fue exitoso
    cy.url().should('include', '/inventory.html').wait(2000);
});


