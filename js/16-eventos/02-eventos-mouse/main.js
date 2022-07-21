/**
 * Eventos del mouse
 */

// Seleccionar el elemento
var boton = document.querySelector("button");
var lista = document.querySelector("ul");

// Registra el evento al boton
boton.addEventListener("click", function () {
    // Acciones que se ejecutan al dar click
    console.log("Evento click");
});

// Cuando el mouse entra al elemento
boton.addEventListener("mouseenter", function () {
    // Acciones que se ejecutan en este evento
    console.log("Evento mouseenter");
});

// Cuando el mouse sale del elemento
boton.addEventListener("mouseout", function () {
    // Acciones que se ejecutan en este evento
    console.log("Evento mouseout");
});

// Similar al click
boton.addEventListener("mousedown", function () {
    // Acciones que se ejecutan en este evento
    console.log("Evento mousedown");
});

// Cuando suelto el click
boton.addEventListener("mouseup", function () {
    // Acciones que se ejecutan en este evento
    console.log("Evento mouseup");
});

// Doble click
boton.addEventListener("dblclick", function () {
    // Acciones que se ejecutan en este evento
    console.log("Evento dblclick");
});

// Registra el evento a la lista
lista.addEventListener("click", function () {
    console.log("Diste click a la lista");
});