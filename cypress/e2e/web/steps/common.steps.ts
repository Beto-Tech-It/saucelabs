import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/login.pages";
import { IngresoCredenciales } from "../pages/login.pages";

const loginPage = new LoginPage();
const ingresoCredenciales = new IngresoCredenciales();


Given('que el usuario se encuentra en la pagina inicial de saucedemo', () => { 
    loginPage.visit();
});


When('ingresa correctamente el user {string} y el password {string}', (user: string, password: string) => {
  ingresoCredenciales.loguearConCredenciales(user, password);
});