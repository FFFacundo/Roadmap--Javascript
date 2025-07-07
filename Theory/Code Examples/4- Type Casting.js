// Ejemplos de Type Casting (Conversión de tipos)
// --- Conversión Explícita ---
let numStr = '123';
let numInt = Number(numStr); // string a number
let str = String(456); // number a string
let boolTrue = Boolean(1); // number a boolean (true)
let boolFalse = Boolean(0); // number a boolean (false)

console.log(typeof numInt, numInt); // number 123
console.log(typeof str, str); // string '456'
console.log(typeof boolTrue, boolTrue); // boolean true
console.log(typeof boolFalse, boolFalse); // boolean false

// --- Conversión Implícita (Coerción) ---
console.log('5' * 2); // 10 (string a number)
console.log('5' + 2); // '52' (number a string)
console.log(1 == '1'); // true (coerción en comparación)
console.log(0 == false); // true (coerción en comparación)

// --- Diferencia entre conversión y coerción ---
// Conversión: Number('42') => 42
// Coerción: '42' == 42 => true (el string se convierte a number automáticamente)
