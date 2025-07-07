// Ejemplos de switch
let fruta = 'manzana';
switch (fruta) {
  case 'banana':
    console.log('Es una banana');
    break;
  case 'manzana':
    console.log('Es una manzana');
    break;
  case 'pera':
    console.log('Es una pera');
    break;
  default:
    console.log('Fruta desconocida');
}

// switch sin break (fall-through)
let dia = 2;
switch (dia) {
  case 1:
  case 2:
  case 3:
    console.log('Es un día entre lunes y miércoles');
    break;
  default:
    console.log('Otro día');
}
