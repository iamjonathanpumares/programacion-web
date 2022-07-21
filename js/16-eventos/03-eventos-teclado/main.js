var buscador = document.querySelector("#buscador");

// Cuando se presiona una tecla
buscador.addEventListener("keydown", function () {
    //console.log("Evento keydown");
});

// Cuando presionas y sueltas la tecla
buscador.addEventListener("keyup", function () {
    //console.log("Evento keyup");
});

// Cuando entro al input y salgo
buscador.addEventListener("blur", function () {
    //console.log("Evento blur");
});

// Cuando seleccionas el texto y lo copias
buscador.addEventListener("copy", function () {
    console.log("Evento copy");
});

// Pegas el texto que copiaste
buscador.addEventListener("paste", function () {
    console.log("Evento paste");
});

// Cuando seleccionas el texto y lo cortas
buscador.addEventListener("cut", function () {
    console.log("Evento cut");
});

// Escucha todos los eventos anteriores, menos el blur
buscador.addEventListener("input", function (e) {
    // Validando el valor del input
    if (e.target.value === "") {
        console.log("El input es requerido");
        buscador.style.border = "solid 10px red";
    }
    console.log(e.target.value);
    console.log("Evento input");
});