// Ejemplos de Funciones

// --- Declaración y llamada ---
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar('Ana'));

// --- Parámetros por defecto y rest ---
function sumar(a = 1, b = 2, ...rest) {
  return a + b + rest.reduce((acc, n) => acc + n, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10

// --- Arrow function ---
const cuadrado = x => x * x;
console.log(cuadrado(5));

// --- IIFE ---
(function() {
  console.log('Esto se ejecuta inmediatamente');
})();

// --- arguments object ---
function mostrarArgs() {
  console.log(arguments);
}
mostrarArgs(1, 2, 3);

// --- Recursión ---
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// --- Lexical scoping y closures ---
function crearContador() {
  let cuenta = 0;
  return function() {
    cuenta++;
    return cuenta;
  };
}
const contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2

// --- Funciones built-in ---
console.log(parseInt('42'));
console.log(isNaN('abc'));
