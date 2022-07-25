const nombreComillasDobles = "Hola";
const nombreComillasSimples = 'Hola';
// alt + 96
const nombreComillasInvertidas = `Hola`;

// Interpolacion de variables
const saludar = (nombre) => {
    return `Hola ${nombre}`;
}

// 3 + 5 = 8
// "Hola " + "Luke" = "Hola Luke" 

const sumar = (numero1, numero2) => {
    // Template strings
    console.log(`La suma es ${numero1 + numero2}`)
    console.log("La suma es " + (numero1 + numero2))
}
sumar(3, 5);

// Puedo crear una cadena de varias lineas
const html = `
    <h1>Hola</h1>
    <p>Soy un parrafo</p>
`;