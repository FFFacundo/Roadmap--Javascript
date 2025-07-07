// Ejemplos de JavaScript Asíncrono

// --- setTimeout ---
setTimeout(() => {
  console.log('Esto se muestra después de 1 segundo');
}, 1000);

// --- setInterval ---
let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log('Intervalo', contador);
  if (contador === 3) clearInterval(intervalo);
}, 500);

// --- Callback ---
function operacionAsync(callback) {
  setTimeout(() => {
    callback('Hecho!');
  }, 300);
}
operacionAsync(mensaje => console.log('Callback:', mensaje));

// --- Callback Hell ---
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log('Callback Hell!');
    }, 100);
  }, 100);
}, 100);

// --- Promesas ---
function promesaDemo() {
  return new Promise(resolve => setTimeout(() => resolve('Listo!'), 500));
}
promesaDemo().then(console.log);

// --- async / await ---
async function demoAsync() {
  const resultado = await promesaDemo();
  console.log('Async/Await:', resultado);
}
demoAsync();
