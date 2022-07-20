// Definicion de la funcion
// Declaracion de funcion o funcion declarativa
function saludar() {
    console.log('Hola desde la funcion saludar');
}

// Llamado de la funcion
saludar();

// Expresion de funcion o funcion expresiva
var saludar2 = function () {
    console.log("Hola desde la funcion saludar2");
}

saludar2();

// Funciones nativas de JavaScript
// parseInt(), parseFloat(), isNaN()
var numeroEntero = parseInt("20");
console.log(numeroEntero);
console.log(typeof numeroEntero);
if (isNaN(numeroEntero)) {
    console.log(numeroEntero + " no es un numero");
} else {
    console.log(numeroEntero + " es un numero")
}

var numeroFlotante = parseFloat("10.7");
console.log(numeroFlotante);
console.log(typeof numeroFlotante);

// Metodos son funciones dentro de un objeto
var numeroDiez = 10;
var cadenaDiez = numeroDiez.toString();
console.log(cadenaDiez);
console.log(typeof cadenaDiez);

function saludo(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo("Ahsoka", "Tano");
saludo();

function saludo2(nombre = "Desconocido", apellido = "") {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludo2("Ahsoka", "Tano");
saludo2("Ahsoka");
saludo2();

function sumar(numero1, numero2) {
    console.log("Hola desde funcion sumar");
    return numero1 + numero2;

    // Este codigo no se va a ejecutar
    console.log("Hola despues del return");
}

var resultado = sumar(3, 5);
console.log(`La suma es ${resultado}`);
