Feature: Login en la aplicacion saucemo

  Background:
    Given que el usuario se encuentra en la pagina inicial de saucedemo

  Scenario: Login exitoso
    When ingresa correctamente las credenciales validas
    Then el usuario deberia ver el dashboard

  Scenario Outline: Validar otras opciones de logueo
    When ingresa correctamente el user "<username>" y el password "<password>"

    Examples:
      | user                    | password     |
      | locked_out_user         | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |
