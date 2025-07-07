// Ejemplos de null en JavaScript

let valor = null;
console.log(valor === null); // true

// Uso común: inicializar variables que luego tendrán un objeto
let usuario = null;
if (!usuario) {
  usuario = { nombre: 'Ana' };
}
console.log(usuario);
