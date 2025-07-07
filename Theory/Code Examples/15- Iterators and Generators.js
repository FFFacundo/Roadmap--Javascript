// Ejemplo de Iteradores y Generadores

// --- Iterador personalizado ---
const miIterable = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let actual = this.from;
    let fin = this.to;
    return {
      next() {
        if (actual <= fin) {
          return { value: actual++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};
for (let valor of miIterable) {
  console.log('Iterador personalizado:', valor);
}

// --- Generador ---
function* generador() {
  yield 1;
  yield 2;
  yield 3;
}
for (let valor of generador()) {
  console.log('Generador:', valor);
}

// --- Generador infinito (ejemplo de lazy evaluation) ---
function* infinitos() {
  let n = 0;
  while (true) {
    yield n++;
  }
}
const gen = infinitos();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
