const persona = {
    nombre: "Luke",
    apellido: "Skywalker"
};

// Acceder a sus valores
// Notacion punto
console.log(persona.nombre);
// Notacion corchete
console.log(persona["nombre"]);

// Crear una propiedad rango
persona.rango = "Maestro Jedi";
console.log(persona);

// Crear una variable con el nombre
const nombrePersona = persona.nombre;
const apellidoPersona = persona.apellido;
console.log(nombrePersona);

// Desestructuracion de objetos
const { nombre, apellido } = persona;
console.log(nombre);
console.log(apellido);