/* Traigo del html los valores que necesito para realizar las funciones */
const operandoA = document.getElementById('primera-entrada');
const operandoB = document.getElementById('segunda-entrada');
const operacion = document.getElementById('operador');
const botonCalcular = document.getElementById('btn-calcular');
const contResultado = document.querySelector('#contenedor-resultado p'); ///contenedor-resultado es el id del div padre que contiene a p vacío, allí irá el resultado de las operaciones. Uso querySelector para seleccionar usando una sintaxis similar a los selectores de especificidad de css*/
const botonReset = document.getElementById('btn-reset');

/*Acción del boton calcular==================*/

/* Agrego un escuchador de eventos al boton calcular para que ejecute algunas de las funciones según la opción elegida por el usuario */

botonCalcular.addEventListener('click', () => {

    /*Punto 3. Validación de operandos*/

    /* Con el siguiente if verifico que los valores ingresados no sean valores nulos para realizar las operaciones, si son valores nulos entonces imprime una solicitud de ingreso de valores. Aclaración: Cuando se utiliza un elemento input con el atributo type="number" y no se ingresa ningún valor, el valor del elemento se considera como una cadena de texto vacía ("") */
    
    /*Como coloco type = "number", el ingreso que admite el input es solo numerico*/

    if ( ( operandoA.value != "" ) && ( operandoB.value != "") ) {
        ejecucionCalculo();
    }else {

        const valorNulos = "Error! Ingrese valores"
        mostrarValor(valorNulos, contResultado);
    }
});



/*Punto 2. */

/*Operaciones posibles*/

function Sumar(a, b) {
    return a+b;
}

function Restar(a, b) {
    return a-b;
}

function Multiplicar(a, b) {
    return a*b;
}


/*Ejecucion de la operacion según valor del <select>*/

function ejecucionCalculo() {
    if (operacion.value == "suma") {
        const resultadoSuma = Sumar(parseFloat(operandoA.value), parseFloat(operandoB.value));
        mostrarValor (resultadoSuma, contResultado);
    }else if (operacion.value == "resta") {
        const resultadoResta = Restar (parseFloat(operandoA.value), parseFloat(operandoB.value));
        mostrarValor (resultadoResta, contResultado);
    }else if (operacion.value == "multiplicacion") {
        const resultadoMultiplicacion = Multiplicar (parseFloat(operandoA.value), parseFloat(operandoB.value));
        mostrarValor (resultadoMultiplicacion, contResultado);
    } else {
        resultadoDivision = Dividir (parseFloat(operandoA.value), parseFloat(operandoB.value));
        mostrarValor (resultadoDivision, contResultado);
    }
}


/* Mostrar resultado en pantalla */

function mostrarValor(valor, contResultado) {
    const resultado = validarResultado(valor);
    contResultado.innerHTML = resultado; /* En esta linea de código hago una modificación de contenido del elemento p que está dentro del div con id: contenedor-resultado*/
}

/*Punto 4.1: imprime error si el segundo valor ingresado es 0*/

function Dividir(a, b) {
    if (b != 0) {
        return a/b;
    }else {
        return ("Operación inválida")
    }
}



/*Punto 4.2: Valida el resultado según sea demasiado grande o demasiado pequeño en cada caso imprime error en la interfaz de usuario */

function validarResultado(val) {
    if (val > 100000000000000) { /*Punto 4.2: Valida el largo del resultado */
        val = "Resultado demasiado grande"
    } else if (val < -100000000000000) {
        val = "Resultado demasiado pequeño"
    } else {
        val = val.toString();
    }
    return val;
}

/*Acción del boton reset==================*/

/* Agrego un escuchador de eventos al boton reset para que ejecute la función anónima que resetea los valores del input y del contenedor de resultado */

botonReset.addEventListener('click', () => {
    /* Reseteo los valores de los input */
    
    operandoA.value = "";
    operandoB.value = "";
    contResultado.innerHTML = "";
    /* Para resetar el contenedor de resultado utilizo la eliminación de elementos por el padre */
})