// Ejemplos de JavaScript Asíncrono
setTimeout(() => {
  console.log('Esto se muestra después de 1 segundo');
}, 1000);

function promesaDemo() {
  return new Promise(resolve => setTimeout(() => resolve('Listo!'), 500));
}
promesaDemo().then(console.log);
