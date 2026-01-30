export class LoginPage {
    visit() {
        cy.visit('/');
    }
}

export class IngresoCredenciales{

    loguear(){
        cy.fixture("login").then((elements) => {
            cy.get(elements.login_user).type("standard_user");
            cy.get(elements.login_pass).type("secret_sauce");
            cy.get(elements.button_click).click();
        });
    }


}