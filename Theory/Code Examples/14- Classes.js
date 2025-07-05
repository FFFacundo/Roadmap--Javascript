// Ejemplo de Clases en JavaScript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}

let perro = new Perro('Rex');
perro.hablar();
