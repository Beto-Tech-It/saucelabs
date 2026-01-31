import { should } from "chai";

export class CarritoCompras{
    agregarCosasCarritoIndividuales(opcion:string){

        cy.fixture("interaccion").then((elements) =>{

            cy.get(elements.opcionPrenda).contains(opcion).click().wait(2000);
            cy.get(elements.agregar_carrito).should('exist').should("be.visible").click();
            cy.get(elements.boton_carrito).should('exist').should("be.visible").click();
            cy.get(elements.checkout).should('exist').should("be.visible").click();
            cy.get(elements.first_name).type("Humberto");
            cy.get(elements.last_name).type("Palomino");
            cy.get(elements.postal).type("51");
            cy.get(elements.continue).should('exist').should("be.visible").click();
            cy.get(elements.finalizacion).should('exist').should("be.visible").click();
            cy.get(elements.return).should('exist').should("be.visible").click();

        })
    }
    agregarCosasCarritoTotales(){
       cy.fixture("interaccion").then((elements) =>{
           cy.get(elements.agregar_varios).each(($btn) => {
           cy.wrap($btn).invoke('click');
});
      cy.get(elements.boton_carrito).should('exist').should("be.visible").click();
            cy.get(elements.checkout).should('exist').should("be.visible").click();
            cy.get(elements.first_name).type("Humberto");
            cy.get(elements.last_name).type("Palomino");
            cy.get(elements.postal).type("51");
            cy.get(elements.continue).should('exist').should("be.visible").click();
            cy.get(elements.finalizacion).should('exist').should("be.visible").click();
            cy.get(elements.return).should('exist').should("be.visible").click();

    });
}
}



     








