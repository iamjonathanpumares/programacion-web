// Valores Falsy
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(false)); // false
console.log(Boolean("")); // false

// Valores Truthy
console.log(Boolean(1)); // true, cualquier valor que no sea 0
console.log(Boolean("a")); // true, cualquier valor que no sea una cadena vacía
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function() {})); // true
console.log(Boolean(true)); // true