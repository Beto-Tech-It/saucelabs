import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { CarritoCompras } from "../pages/interaccion.pages";

const carritoCompras = new CarritoCompras();

When('el usuario le da click en opcion {string} de agregar al carrito de compras', (opcion:string) => {
  carritoCompras.agregarCosasCarrito(opcion);
});
