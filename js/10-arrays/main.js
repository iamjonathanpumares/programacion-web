var listaCompras = ["Manzana", "Jabon", "Platos"];
console.log(listaCompras);
console.log(listaCompras.length); // Numero de elementos en la lista
console.log(listaCompras[0]);

// El metodo push() agrega un elemento al final de la lista
listaCompras.push("Cebolla");
listaCompras.push("Tomates");
console.log(listaCompras);

// El metodo pop() elimina un elemento al final de la lista
listaCompras.pop();
console.log(listaCompras);

// El metodo unshift() agrega un elemento al inicio de la lista
listaCompras.unshift("Pan tostado");
console.log(listaCompras);

// El metodo shift() elimina un elemento al inicio de la lista
listaCompras.shift();
console.log(listaCompras);
var indice = listaCompras.indexOf("Manzana"); // 0
console.log(listaCompras[indice])

// Comprueba si el array no esta vacio
if (listaCompras.length > 0) {
    console.log("La lista tiene elementos");
} else {
    console.log("La lista esta vacia");
}

var arreglo = [5, "Hola", true, {}, []];
console.log(arreglo);
console.log(arreglo.length); // Numero de elementos en el arreglo