// Variable global
var nombre = "Luke";

// Declaración de función
function saludar() {
    // Variable local
    var apellido = "Skywalker";
    console.log("Hola " + nombre + " " + apellido);
}

// Llamada a función
saludar();

console.log("Hola " + nombre);

// No se puede acceder a la variable local
console.log("Hola " + apellido);