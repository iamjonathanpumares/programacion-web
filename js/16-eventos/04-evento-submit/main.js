var formulario = document.querySelector("#formulario");

// Registrar el evento submit al formulario
formulario.addEventListener("submit", function (e) {
    // Acciones que se ejecutan cuando sucede el evento
    e.preventDefault(); // Evita el comportamiento por defecto
    console.log("Evento submit");
});