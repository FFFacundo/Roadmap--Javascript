// Ejemplos de if...else
let edad = 16;
if (edad >= 18) {
  console.log('Eres mayor de edad');
} else if (edad >= 13) {
  console.log('Eres adolescente');
} else {
  console.log('Eres niño');
}

// if anidado
let nota = 7;
if (nota >= 9) {
  console.log('Excelente');
} else {
  if (nota >= 6) {
    console.log('Aprobado');
  } else {
    console.log('Desaprobado');
  }
}
