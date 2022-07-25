/**
 * var: Scope global y local
 * let: Scope global, local y de bloque
 * const: Scope global, local y de bloque
 */

var nombre = "Luke Skywalker";
// Mala practica
var nombre = "Ahsoka Tano";
console.log(nombre);

let nombre2 = "Luke Skywalker";
// No puedo volver a redeclarar una variable existente
// let nombre2 = "Ahsoka Tano";
// Cambio el valor
nombre = "Ahsoka Tano";
console.log(nombre2);

for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log(i);

// let tiene un alcance de bloque
// la variable incremento solamente vive dentro del for
for (let incremento = 1; incremento <= 5; incremento++) {
    console.log(incremento);
}
// La variable incremento ya no existe
// console.log(incremento);

// Scope global
let numero = 50;

if (true) {
    // Scope en bloque
    // Solamente existe dentro del if
    let numero = 10;
    console.log(numero);
}

console.log(numero);

const numero2 = 150;
// Su valor no cambia, esto manda error
// numero2 = 200;
console.log(numero2);

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Jorge", "Aldahir", "Omar", "Yoir"];
const arreglo = [1, "Hola", true, [1, 2, 3, 4]];
console.log(arreglo);
console.log(nombres);
// No se puede reasignar un nuevo valor a una constante
// numeros = [6, 7, 8, 9, 10];
// Si puedo agregar o quitar valores
numeros.push(6);
numeros.push(7);
numeros.pop();
numeros.pop();
console.log(numeros);