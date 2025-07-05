// Ejemplos de Bucles e Iteradores
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let arr = ['a', 'b', 'c'];
for (let valor of arr) {
  console.log(valor);
}

arr.forEach((valor, idx) => console.log(idx, valor));
