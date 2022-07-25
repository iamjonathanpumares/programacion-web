// Definiendo la funcion
function saludar() { // Funcion declarativa
    console.log("Hola desde saludar()");
}

// Llamando a la funcion
saludar();

// Funcion expresiva
const saludar2 = function () {
    console.log("Hola desde saludar2");
}
saludar2();

// Arrow functions o funciones de flecha
const saludarFlecha = () => {
    console.log("Hola desde saludarFlecha()");
}
saludarFlecha();

const saludarFlecha2 = (nombre) => {
    console.log("Hola " + nombre);
}
saludarFlecha2("Anakin");

// return: Retornar o regresar valores desde la funcion
const retornaSaludo = nombre => "Hola " + nombre;
const retornaSaludo2 = function (nombre) {
    return "Hola" + nombre;
} 
const saludo = retornaSaludo("Anakin");
console.log(saludo);

const numeros = [1, 2, 3, 4, 5];
const numerosPorDos = numeros.map((numero) => numero * 2);
console.log(numerosPorDos);