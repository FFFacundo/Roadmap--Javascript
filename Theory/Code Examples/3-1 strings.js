// Ejemplos y métodos de strings en JavaScript

let saludo = 'Hola Mundo';

// Propiedades
console.log(saludo.length); // 10

// Métodos de strings
console.log(saludo.toUpperCase()); // 'HOLA MUNDO'
console.log(saludo.toLowerCase()); // 'hola mundo'
console.log(saludo.charAt(1)); // 'o'
console.log(saludo.indexOf('Mundo')); // 5
console.log(saludo.includes('Hola')); // true
console.log(saludo.replace('Mundo', 'JS')); // 'Hola JS'
console.log(saludo.slice(0, 4)); // 'Hola'
console.log(saludo.split(' ')); // ['Hola', 'Mundo']
console.log(saludo.substring(2, 7)); // 'la Mu'
console.log('   texto   '.trim()); // 'texto'

// Template literals
let nombre = 'Ana';
console.log(`Hola, ${nombre}!`); // 'Hola, Ana!'
