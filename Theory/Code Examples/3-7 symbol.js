// Ejemplos de Symbol en JavaScript

let id = Symbol('id');
let otroId = Symbol('id');
console.log(id === otroId); // false (siempre únicos)

let user = {
  nombre: 'Ana',
  [id]: 123
};
console.log(user[id]); // 123

// Uso en propiedades privadas
const MI_SIMBOLO = Symbol('privado');
user[MI_SIMBOLO] = 'secreto';
console.log(user[MI_SIMBOLO]); // 'secreto'
