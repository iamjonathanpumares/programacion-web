/**
 * El ciclo for permite repetir un bloque de codigo un numero determinado de veces
 */
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

/**
 * El ciclo for permite recorrer los elementos de un arreglo a traves de su indice
 */
var listaCompras = [
    "Manzana",
    "Jabon",
    "Agua",
    "Azucar",
    "Platos"
];
for (var i = 0; i < listaCompras.length; i++) {
        console.log(listaCompras[i]);
}

/**
 * El ciclo for-of permite recorrer los elementos de un arreglo a traves de su valor
 */
for (var producto of listaCompras) {
    console.log(producto);
}

/**
 * El ciclo while permite repetir un bloque de codigo mientras una condicion sea verdadera
 */
var contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

/**
 * El ciclo while permite recorrer los elementos de un arreglo a traves de su indice
 * No es muy usado y tampoco es recomendable
 */
var indice = 0;
while (indice < listaCompras.length) {
    console.log(listaCompras[indice]);
    indice++;
}