// Ejemplo de Iteradores y Generadores
const iterable = [10, 20, 30];
const iterador = iterable[Symbol.iterator]();
console.log(iterador.next());

function* generador() {
  yield 1;
  yield 2;
  yield 3;
}
for (let valor of generador()) {
  console.log(valor);
}
