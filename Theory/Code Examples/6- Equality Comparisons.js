// Ejemplos de Comparaciones de Igualdad

// --- == (igualdad débil)
console.log(2 == '2'); // true
console.log(null == undefined); // true
console.log('' == false); // true

// --- === (igualdad estricta)
console.log(2 === '2'); // false
console.log(0 === false); // false
console.log(null === undefined); // false

// --- Object.is ---
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, 0)); // false
console.log(Object.is(1, 1)); // true

// --- Algoritmos de igualdad en colecciones ---
let arr = [NaN];
console.log(arr.includes(NaN)); // true (SameValueZero)
let set = new Set([0, -0]);
console.log(set.size); // 1 (SameValueZero: 0 y -0 son iguales)
