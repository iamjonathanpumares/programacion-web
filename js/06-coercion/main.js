/**
 * Coercion implicita: se realiza automaticamente
 */
var a = 3 + "5";
console.log(typeof a);

var b = 3 * "5";
console.log(typeof b);

/**
 * Coercion explicita: se realiza manualmente
 */
var numeroVeinte = 20;
var cadenaVeinte = String(numeroVeinte);
console.log(typeof cadenaVeinte);

var numero = Number(cadenaVeinte);
console.log(typeof numero);

