import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/login.pages";
import { IngresoCredenciales } from "../pages/login.pages";

const loginPage = new LoginPage();
const ingresoCredenciales = new IngresoCredenciales();


Given('que el usuario se encuentra en la pagina inicial de saucemo', () => {
    loginPage.visit();
});

When('ingresa correctamente las credenciales validas',() =>{

    ingresoCredenciales.loguear();

})