// Ejemplos de throw
function validarEdad(edad) {
  if (edad < 0) {
    throw new RangeError('La edad no puede ser negativa');
  }
  return edad;
}

try {
  validarEdad(-5);
} catch (e) {
  console.error('Error:', e.message);
}
