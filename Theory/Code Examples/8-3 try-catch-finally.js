// Ejemplos de try/catch/finally
function dividirSeguro(a, b) {
  try {
    if (b === 0) throw new Error('División por cero');
    return a / b;
  } catch (e) {
    console.error('Error atrapado:', e.message);
    return null;
  } finally {
    console.log('Intento de división finalizado');
  }
}

console.log(dividirSeguro(10, 2)); // 5
console.log(dividirSeguro(10, 0)); // null
