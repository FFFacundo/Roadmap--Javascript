// Ejemplos de Control de Flujo

// --- if...else ---
let edad = 18;
if (edad >= 18) {
  console.log('Mayor de edad');
} else {
  console.log('Menor de edad');
}

// --- switch ---
let color = 'rojo';
switch (color) {
  case 'azul':
    console.log('Color azul');
    break;
  case 'rojo':
    console.log('Color rojo');
    break;
  default:
    console.log('Otro color');
}

// --- try / catch / finally y throw ---
function dividir(a, b) {
  if (b === 0) throw new Error('No se puede dividir por cero');
  return a / b;
}

try {
  let resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.error('Error:', error.message);
} finally {
  console.log('Operación finalizada');
}
