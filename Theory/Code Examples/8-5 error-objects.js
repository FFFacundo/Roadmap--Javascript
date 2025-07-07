// Ejemplos de objetos Error personalizados
class MiError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = 'MiError';
  }
}

try {
  throw new MiError('Esto es un error personalizado');
} catch (e) {
  console.error(e.name, e.message);
}

// Propiedades de Error
let error = new Error('Mensaje de error');
console.log(error.message);
console.log(error.stack);
