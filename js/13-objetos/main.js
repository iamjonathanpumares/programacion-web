var persona = {
    nombre: "Luke",
    apellido: "Skywalker",
    estatura: 1.72,
    peso: 73,
    rango: "Maestro Jedi",
    aprendices: ["Grogu", "Ben Solo", "Rey"],
    nombreCompleto: function () {
        console.log(`${this.nombre} ${this.apellido}`);
    }
};

// Notacion de punto
console.log(persona.nombre);

// Notacion de corchetes
console.log(persona["nombre"]);
persona.nombreCompleto();