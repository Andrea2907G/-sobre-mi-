
//? ============ Variables a utilizar ============ 

const entradaDeNombre = document.getElementById("nombre");
const botonJugar = document.getElementById("botonJugar");
const cuerpo = document.getElementById("zona-juego");
const nombreJugador = document.querySelector("#resultados .caja-contador p");
const error = document.querySelector("#contenedor_nombre p");

/* LLamo a la seccion de ventana modal y al titulo h2 de esta seccion*/

const ventanaModal = document.querySelector(".ventana-modal");

const tituloVentanaModal = document.querySelector(".contenedor-ventana-modal h2");

/*El siguiente botón está dentro de la ventana modal y resetea los valores del juego*/ 

const botonReset = document.querySelector(".boton-reset");

/*Cruz de cierre de ventana modal*/

const iconoCierre = document.querySelector(".contenedor-ventana-modal div"); 

/*Traigo la section que la voy a vincular con un before para mostrar numero de partida*/

const areaJuego = document.querySelector("#juego");

/*Div que contiene las tres imágenes al cual le agrego un after y un before con el cartel que mostrará la eleccion del usuario y la computadora*/

const divConAfterBefore = document.querySelector("#juego div");

/* Variable usada para imprimir en pantalla la elección del usuario y la elección de la computadora*/

let mensajeEleccionUsuario;
let mensajeEleccionComputadora;

/*Variable que indica numero de partida, será usada para imprimir en pantalla ese valor*/ 

let numDePartida = 1;

/*Variable que guardará la elección del usuario y de la computadora*/

let jugadaDelUsuario; 
let jugadaComputadora;

/*botones de piedra papel y tijeras*/

let opciones = document.querySelectorAll("#juego img"); // Selecciono todas las imagenes en un NodeList


/*variables que contabilizan los resultados por partida*/

let usuario = 0;
let computadora = 0;

/*Boton siguiente partida*/

const botonSiguiente = document.querySelector("#resultados div:nth-of-type(2) button");

/*En el siguiente parrafo va el mensaje de quien gana en cada partida*/

let cartel = document.querySelector("#resultados div:nth-of-type(2) p"); 

//? ============ FIN de Variables a utilizar ============ 

/* 
TODO ============ Funciones asociadas a elementos del Header ============ */

botonJugar.addEventListener('click', () => {
    tomarNombre(); //* implementada
    mostrarMain(); //* implementada
    desplazamiento(); //* implementada
    resetValores(); //* implementada
});

/*Tomo nombre y lo pongo en el tablero*/

function tomarNombre() {
    entradaDeNombre.value = entradaDeNombre.value.charAt(0).toUpperCase() + entradaDeNombre.value.substring(1); //Pongo en mayúscula la primer letra del nombre
    nombreJugador.innerHTML = entradaDeNombre.value;
}

/*Con esta funcion aparece el main oculto*/

function mostrarMain() {
    if (entradaDeNombre.value != "") {
        cuerpo.style.display = "block";
    } else {
        mostrarError();
    }
}

/*Esta función muestra error de campo vacío*/

function mostrarError () {
    error.style.fontSize = "25px";
    entradaDeNombre.style.marginBottom = "10px";
    error.innerHTML = "Escribe tu nombre, por favor!"; 
    error.style.color = "red";
}

/*Funcion desplazamiento a zona-juego*/

function desplazamiento() {
    cuerpo.scrollIntoView ({ behavior: "smooth" });
}

/*
TODO ============ Funciones asociadas al juego ============ */

//Agrega escuchador de eventos, esta función se ejecuta al inicio

function agregarEventListener() {
    opciones[0].addEventListener('click', elijePiedra);
    opciones[1].addEventListener('click', elijePapel);
    opciones[2].addEventListener('click', elijeTijeras);
}

//Una vez que el jugador elige su opción se ejecuta la función correspondiente elijePiedra(), elijePapel() o elijeTijeras(), donde se especifica la jugadaDelUsuario y se anula el escuchador de Eventos de todos los botones.

function elijePiedra() {

    jugadaDelUsuario = 0;

// Cambia el valor de display y opacidad para mostrar el pseudoelemento que contiene la eleccion del jugador

    divConAfterBefore.style.setProperty('--opacity-after', '1');

    mensajeEleccionUsuario = "Elegiste piedra!"
    divConAfterBefore.style.setProperty('--contenido-after', `"${mensajeEleccionUsuario}"`);
    opciones[0].removeEventListener('click', elijePiedra); //!Eliminar la posibilidad del hover en esta funcion PENDIENTE
    opciones[1].removeEventListener('click', elijePapel);
    opciones[2].removeEventListener('click', elijeTijeras);
    
    setTimeout(()=> {
        elijeComputadora(jugadaDelUsuario); 
    }, 200);
}

function elijePapel() {
    jugadaDelUsuario = 1;

    // Cambia el valor de display y opacidad para mostrar el pseudoelemento que contiene la eleccion del jugador

    divConAfterBefore.style.setProperty('--opacity-after', '1');

    mensajeEleccionUsuario = "Elegiste papel!"

    divConAfterBefore.style.setProperty('--contenido-after', `"${mensajeEleccionUsuario}"`); //--contenido-after' es una variable CSS personalizada. La llamo en mi hoja de estilos en la propiedad content.

    opciones[0].removeEventListener('click', elijePiedra);
    opciones[1].removeEventListener('click', elijePapel);
    opciones[2].removeEventListener('click', elijeTijeras);

    setTimeout(()=> {
        elijeComputadora(jugadaDelUsuario); 
    }, 200);    
}


function elijeTijeras() {
    jugadaDelUsuario = 2;

    setTimeout(() => {
        divConAfterBefore.style.setProperty('--opacity-after', '1');
    }, 100)
    
   // divConAfterBefore.style.setProperty('--opacity-after', '1');

    mensajeEleccionUsuario = "Elegiste tijera!"
    divConAfterBefore.style.setProperty('--contenido-after', `"${mensajeEleccionUsuario}"`);

    

    opciones[0].removeEventListener('click', elijePiedra);
    opciones[1].removeEventListener('click', elijePapel);
    opciones[2].removeEventListener('click', elijeTijeras);
    
    setTimeout(()=> {
        elijeComputadora(jugadaDelUsuario); 
    }, 200);
}




function elijeComputadora () {
    cambioDeTitulo();

    //Agregar animacion de tres puntos suspensivos //!No implementado todavia

   jugadaComputadora = Math.floor(Math.random() * 3);
    
    //Determino el mensaje de eleccion de la computadora
    
    if (jugadaComputadora == 0) {
        mensajeEleccionComputadora = "Computadora eligió piedra!";
    } else if (jugadaComputadora == 1) {
        mensajeEleccionComputadora = "Computadora eligió papel!";
    } else if (jugadaComputadora == 2) {
        mensajeEleccionComputadora = "Computadora eligió tijeras!";
    } 

    // Agrego efecto a la imagen que corresponde con la variable eleccionComputadora que puede ser 0, 1 o 2, ejecuto despues de 2 segundos de realizada la eleccion del usuario; 

    setTimeout(() => {
        opciones[jugadaComputadora].classList.add('opcion-activada');
        divConAfterBefore.style.setProperty('--opacity-before', '1');
        divConAfterBefore.style.setProperty('--contenido-before', `"${mensajeEleccionComputadora}"`);
    }, 2000);

    //ejecuto determinarResultado 2.5 segundos de visualizarse la eleccion de la Computadora. 
    let ganaPartida = resultadoPartida();


    setTimeout(() => {
        muestroEnTablero(ganaPartida);
    }, 2000);
}


// A esta funcion la ejecuto cuando el usuario hace click en alguna de las tres opciones 

function cambioDeTitulo() {
    let titulo = document.querySelector("#juego h2");
    if (titulo.textContent == "Elige tu jugada!") {
        titulo.style.opacity = 0; // Oculta gradualmente el título actual
        setTimeout(() => {
            titulo.innerHTML = "Ahora la computadora!";
            titulo.style.opacity = 1; // Muestra gradualmente el nuevo título
            titulo.classList.remove("rojo-texto");
            titulo.classList.add("amarillo-texto");  
        }, 100);
    } else {
        titulo.style.opacity = 0; // Oculta gradualmente el título actual en 0.3s, el setTimeout me da tiempo de que se desvanezca este titulo para que aparezca el siguiente
        setTimeout(() => {
            titulo.innerHTML = "Elige tu jugada!"; 
            titulo.style.opacity = 1; // Muestra gradualmente el nuevo título
            titulo.classList.remove("amarillo-texto");
            titulo.classList.add("rojo-texto");
        }, 100);
    }
}

function activarDesactivarBotones() { // !NO USADO POR AHORA
    if (botonActivado) {
        botonActivado = false;
    } else {
        botonActivado = true;
    }
}

function resultadoPartida () {
    let ganador;
    if (jugadaComputadora === jugadaDelUsuario) {
        ganador = "Empate";
    }
    else if (jugadaComputadora === 0 && jugadaDelUsuario === 2 || 
        jugadaComputadora === 1 && jugadaDelUsuario === 0 ||
        jugadaComputadora === 2 && jugadaDelUsuario === 1) {
        ganador = "Gana la computadora";
        computadora++;
    }

    else {
        ganador = "Gana el usuario";
        usuario++;
    }

    return ganador;
}

function muestroEnTablero(ganaPartida) { 
    cartel.innerHTML = ganaPartida;
    cartel.style.fontSize = "clamp(1.5vw, 2.8vw, 3rem)";
    cartel.style.color = "#15d603";

    let contadores = document.querySelectorAll(".contador p");

    contadores[0].innerHTML = usuario;
    contadores[1].innerHTML = computadora;
    
    btnSiguientePartida();

    setTimeout (() => {
        if (numDePartida === 5 || usuario === 3 || computadora === 3) {
            mostrarGanador();
            ventanaModal.classList.add("mostrar-ventana-modal");

            //Agrego escuchador de eventos al boton de la ventana global para que resetee lo valores del juego

            botonReset.addEventListener('click', () => {
                resetValores()
            })
            
            iconoCierre.addEventListener('click', () => {
                ventanaModal.classList.remove("mostrar-ventana-modal");
            })
        }
    }, 2000);
    
}

function btnSiguientePartida() {
    if (numDePartida < 5 ) {
        botonSiguiente.style.display = "block";
        botonSiguiente.addEventListener('click', siguienteIntento); 
    }
}

function siguienteIntento() {

    if (numDePartida < 5) {
        numDePartida++;
        mostrarNumPartida();
        opciones[jugadaComputadora].classList.remove('opcion-activada');
        cambioDeTitulo();
        divConAfterBefore.style.setProperty('--contenido-before', `""`);
        divConAfterBefore.style.setProperty('--contenido-after', `""`);
        //botonSiguiente.removeEventListener('click', siguienteIntento); // ! No implementado

        agregarEventListener();
        botonSiguiente.style.display = "none";
        cartel.innerHTML = "";
    }
}

//la siguiente funcion muestra en pantalla el numero de partida 

function mostrarNumPartida() {
    areaJuego.style.setProperty('--num-partida-before', `"Intento ${numDePartida}"`);
}


function mostrarGanador() { 
    if (usuario == computadora) {
        tituloVentanaModal.innerHTML = "Empate!";
    } else if (usuario > computadora) {
        tituloVentanaModal.innerHTML = "Ganaste!";
    } else {
        tituloVentanaModal.innerHTML = "Perdiste!";
    }
}

function resetValores() {
    
    numDePartida = 1;
    usuario = 0;
    computadora = 0;
    cartel.innerHTML = "";

    /*Reseteo numero de partida que se muestra en pantalla*/

    areaJuego.style.setProperty('--num-partida-before', `"Intento ${numDePartida}"`);

    /*Reseteo últimas elecciones del usuario*/

    divConAfterBefore.style.setProperty('--contenido-before', `""`);
    divConAfterBefore.style.setProperty('--contenido-after', `""`);
    
    /*Elimino clase modificadora que marca la elección de la computadora*/

    opciones[jugadaComputadora].classList.remove('opcion-activada');

    /*Reseteo tablero de puntajes*/

    let contadores = document.querySelectorAll(".contador p");

    contadores[0].innerHTML = usuario;
    contadores[1].innerHTML = computadora;

    /*Reseteo el título*/

    let titulo = document.querySelector("#juego h2");
    titulo.innerHTML = "Elige tu jugada!"; 
    titulo.classList.remove("amarillo-texto");
    titulo.classList.add("rojo-texto");
    

    /* Agrego nuevamente escuchador de eventos a las opciones piedra papel o tijeras para reiniciar la partida*/

    agregarEventListener()

    //Remuevo ventana global

    ventanaModal.classList.remove("mostrar-ventana-modal");
}

/*
Todo ============ Inicio de instrucciones ============ */

agregarEventListener();
mostrarNumPartida();
