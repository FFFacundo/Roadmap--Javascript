// Ejemplos del uso de 'this'
const persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log('Hola, soy ' + this.nombre);
  }
};
persona.saludar();

function mostrar() {
  console.log(this);
}
mostrar();
