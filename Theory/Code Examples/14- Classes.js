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
  #raza;
  constructor(nombre, raza) {
    super(nombre);
    this.#raza = raza;
  }
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
  get raza() {
    return this.#raza;
  }
  set raza(nuevaRaza) {
    this.#raza = nuevaRaza;
  }
  static info() {
    return 'Los perros son animales domésticos.';
  }
}

let perro = new Perro('Rex', 'Labrador');
perro.hablar();
console.log(perro.raza);
perro.raza = 'Golden';
console.log(perro.raza);
console.log(Perro.info());
