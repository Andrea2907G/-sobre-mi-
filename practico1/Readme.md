# Calculadora simple


Esta es una calculadora simple desarrollada con tecnología HTML, CSS y JavaScript. Podrá visualizarse en el navegador del usuario accediendo al siguiente enlace: (URL). 


Este desarrollo forma parte de un proyecto de práctica de las tecnologías antes mencionadas. El objetivo del mismo es proporcionar herramientas para la realización de operaciones básicas de suma, resta, multiplicación y división admitiendo operaciones con decimales.

## Uso

1. Deberá ingresar un valor númerico en la casilla denominada "Primer operando".

2. Deberá elegir el operador deseado por medio del menú desplegable.

3. Deberá ingresar un valor númerico en la casilla denominada "Segundo operando".

4. Finalmente debera presionar el botón "Calcular" para que el resultado sea mostrado en el área correspondiente a "Resultado"

## Funcionalidades implementadas

* Operaciones matemáticas admitidas: suma, resta, multiplicación, división.

* Validación de operandos: Verifica que los campos no estén vacíos al presionar el botón calcular. Verifica que el valor del segundo operando sea distinto de cero para la operacion Dividir al presionar el botón calcular.

* Validación de resultados: Verifica que el resultado de la operación sea menor o igual a 100000000000000 y mayor o igual a -100000000000000 para ser mostrado en la interfaz de usuario.

* Se implementan mensajes de error cuando se cumplen las dos situaciones antes descriptas.

* Las calculadora soporta numeros con decimales.

* Se agrega un boton con la funcionalidad reset, este botón resetea los valores de los campos "Primer operando", "Segundo operando" y "Resultado".

## 1er Ejemplo de uso:

1. Ingreso en "Primer operando" el valor: 55.

2. Ingreso en "Segundo operando" el valor: 10.

3. Selecciono la operacion "Multiplicar".

4. Presiono botón calcular y visualizo resultado: 550.

## 2do Ejemplo de uso:

1. Ingreso en "Primer operando" el valor: sin valor.

2. Ingreso en "Segundo operando" el valor 10.

3. Selecciono la operacion "Sumar".

4. Presiono botón calcular y visualizo resultado: Error! Ingrese valores.

## 3er Ejemplo de uso:

1. Ingreso en "Primer operando" el valor 55.

2. Ingreso en "Segundo operando" el valor 0.

3. Selecciono la operacion "Dividir".

4. Presiono botón calcular y visualizo resultado: Operación inválida.

## 4to Ejemplo de uso:

1. Ingreso en "Primer operando" el valor 100000000000001.

2. Ingreso en "Segundo operando" el valor 0.

3. Selecciono la operacion "sumar".

4. Presiono botón calcular y visualizo resultado: Resultado demasiado grande.

## 5to Ejemplo de uso:

1. Ingreso en "Primer operando" el valor -100000000000001.

2. Ingreso en "Segundo operando" el valor 0.

3. Selecciono la operacion "Sumar".

4. Presiono botón calcular y visualizo resultado: Resultado demasiado pequeño.