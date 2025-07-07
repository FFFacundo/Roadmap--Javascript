// Ejemplos de Bucles e Iteradores

// --- do...while ---
let i = 0;
do {
  console.log('do...while', i);
  i++;
} while (i < 2);

// --- while ---
let j = 0;
while (j < 2) {
  console.log('while', j);
  j++;
}

// --- for ---
for (let k = 0; k < 2; k++) {
  console.log('for', k);
}

// --- for...in (objetos) ---
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log('for...in', key, obj[key]);
}

// --- for...of (iterables) ---
const arr = ['x', 'y'];
for (let val of arr) {
  console.log('for...of', val);
}

// --- break y continue ---
for (let n = 0; n < 5; n++) {
  if (n === 2) continue;
  if (n === 4) break;
  console.log('break/continue', n);
}

// --- Etiquetas ---
outer: for (let x = 0; x < 2; x++) {
  for (let y = 0; y < 2; y++) {
    if (x === 1 && y === 1) break outer;
    console.log('labeled', x, y);
  }
}
