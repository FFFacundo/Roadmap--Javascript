// Ejemplos de Expresiones y Operadores

// --- Operadores de asignación ---
let a = 1;
a += 2; // 3
a *= 2; // 6

// --- Operadores de comparación ---
console.log(5 > 3); // true
console.log(5 === '5'); // false

// --- Operadores aritméticos ---
let suma = 2 + 3;
let producto = 4 * 5;
let potencia = 2 ** 3; // 8
let resto = 10 % 3; // 1

// --- Operadores bit a bit ---
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5); // -6

// --- Operadores lógicos ---
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// --- Operadores BigInt ---
let big1 = 12345678901234567890n;
let big2 = 2n;
console.log(big1 * big2);

// --- Operadores de string ---
let texto = 'Hola' + ' Mundo';
let nombre = 'Ana';
console.log(`Hola, ${nombre}!`);

// --- Operador ternario ---
let edad = 20;
let tipo = edad >= 18 ? 'adulto' : 'menor';
console.log(tipo);

// --- Operador coma ---
let x = (1, 2, 3);
console.log(x); // 3

// --- Operadores unarios ---
let b = 5;
console.log(typeof b); // 'number'
console.log(++b); // 6

// --- Operadores relacionales ---
let obj = { nombre: 'Ana' };
console.log('nombre' in obj); // true
console.log(obj instanceof Object); // true
