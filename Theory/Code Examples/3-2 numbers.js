// Ejemplos y métodos de numbers en JavaScript

let numero = 42;
let decimal = 3.14;
let negativo = -10;

// Propiedades y métodos
console.log(Number.isInteger(numero)); // true
console.log(Number.isNaN(NaN)); // true
console.log(Number.parseInt('123.45')); // 123
console.log(Number.parseFloat('123.45')); // 123.45
console.log(decimal.toFixed(1)); // '3.1'
console.log(numero.toString(2)); // '101010' (binario)
console.log(Math.abs(negativo)); // 10
console.log(Math.round(decimal)); // 3
console.log(Math.max(1, 5, 10)); // 10
console.log(Math.min(1, 5, 10)); // 1
console.log(Math.random()); // número aleatorio entre 0 y 1
