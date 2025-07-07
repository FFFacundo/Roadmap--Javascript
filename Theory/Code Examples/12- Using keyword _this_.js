// Ejemplos del uso de 'this'

// --- this en un método ---
const persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log('Hola, soy ' + this.nombre);
  }
};
persona.saludar();

// --- this en una función normal ---
function mostrar() {
  console.log(this);
}
mostrar(); // En modo estricto: undefined, en no estricto: objeto global

// --- this usando call, apply, bind ---
function saludaCiudad(ciudad) {
  console.log(`Hola, soy ${this.nombre} de ${ciudad}`);
}
const ana = { nombre: 'Ana' };
saludaCiudad.call(ana, 'Madrid');
saludaCiudad.apply(ana, ['Barcelona']);
const saludoAna = saludaCiudad.bind(ana);
saludoAna('Valencia');

// --- this en arrow function ---
const obj = {
  valor: 42,
  metodo: function() {
    const arrow = () => console.log(this.valor);
    arrow();
  }
};
obj.metodo();

// --- this en event handler (solo en navegador) ---
// document.getElementById('btn').onclick = function() { console.log(this); };
