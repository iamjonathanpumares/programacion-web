// Puede haber un error, porque puede aun no existir por el tiempo de carga que se toma
var imagen = document.querySelector("img");

// Registrando el evento
document.addEventListener("DOMContentLoaded", function () {
    // Acciones que se van ejecutar cuando suceda este evento
    console.log("Evento DOMContentLoaded");

    // Aseguro que mi imagen si existe
    var imagen = document.querySelector("img");
});