// Ejemplo de Strict Mode
'use strict';
// x = 3.14; // Error: x is not defined
let x = 3.14; // Correcto

// --- Diferencias con modo no estricto ---
function sinStrict() {
  y = 2; // No error en modo no estricto (crea variable global)
  return y;
}

function conStrict() {
  'use strict';
  // z = 2; // Error: z is not defined
  let z = 2;
  return z;
}

console.log(sinStrict()); // 2
console.log(conStrict()); // 2
