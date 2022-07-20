var productos = [
    { nombre: "Monitor", precio: 5000, cantidad: 3 },
    { nombre: "Teclado", precio: 1300, cantidad: 15 },
    { nombre: "Audifonos", precio: 1000, cantidad: 7 },
    { nombre: "Cargador", precio: 400, cantidad: 20 }
];

var productosFiltrados = productos.filter(function (producto) {
    console.log(producto);
    return producto.cantidad > 10;
});
console.log(productosFiltrados);

var nombresProductos = productos.map(function (producto) {
    return producto.nombre;
});
console.log(nombresProductos);

var productoEncontrado = productos.find(function (producto) {
    return producto.nombre === "Monitor";
});
console.log(productoEncontrado);

productos.forEach(function (producto) {
    console.log(producto);
});

var productosSinExistencia = productos.some(function (producto) {
    return producto.cantidad <= 0;
});
console.log(productosSinExistencia);
