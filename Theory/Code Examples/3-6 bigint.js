// Ejemplos de BigInt en JavaScript

let big = 1234567890123456789012345678901234567890n;
console.log(big + 10n); // Suma de BigInt
console.log(big * 2n); // Multiplicación

// Comparación
console.log(big > 1000000000000000000000000000000000000000n); // true

// No se puede mezclar BigInt y Number directamente
// console.log(big + 1); // Error
