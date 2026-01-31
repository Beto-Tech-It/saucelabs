Feature: Interaccion con el sistema de compras

Background:
    Given que el usuario se encuentra en la pagina inicial de saucedemo
    When ingresa correctamente el user "standard_user" y el password "secret_sauce"

Scenario Outline: El usuario quiere validar el sistema de compras

When el usuario le da click en opcion "<opcion>" de agregar al carrito de compras

Examples:
|opcion|
|Sauce Labs Backpack|
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Fleece Jacket|
|Sauce Labs Onesie|
|Test.allTheThings() T-Shirt (Red)|

Scenario: El usuario quiere agregar todos los elementos al carrito

When el usuario agrega todos los elementos al carrito




