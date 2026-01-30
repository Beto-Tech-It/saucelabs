export class CarritoCompras{
    agregarCosasCarrito(opcion:string){

        cy.fixture("interaccion").then((elements) =>{

            cy.get(elements.opcionPrenda).contains(opcion).click().wait(2000);
        })


    }
}





