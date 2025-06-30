
// 2. Variables y Tipos de Datos
/*
○ var / let / const 
    ■ Crea 3 variables con var, let y const, y observa cómo se comportan al 
    intentar re-declararlas o reasignarlas. 
*/


const greeting = "Hello ";
var world = "World";
let symbol = "!";

//const greeting = "Hey!"; ERROR => No se puede volver a declarar la variable con ámbito de bloque 'greeting'.
var world = 2;
//let symbol ="?"; ERROR => No se puede volver a declarar la variable con ámbito de bloque 'symbol'.

/*
○ Data Types 
    ■ Declara una variable de cada tipo: string, number, boolean, null, 
    undefined, bigint, symbol. 
*/ 

let stringVar = "This is a string";
let numberVar = 99;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let bigIntVar = 99n;
let symbolVar = Symbol('id'); // A symbol is an unique and inmutable value.

console.log(typeof(stringVar));
console.log(typeof(numberVar));
console.log(typeof(booleanVar));
console.log(typeof(nullVar));
console.log(typeof(undefinedVar));
console.log(typeof(bigIntVar));
console.log(typeof(symbolVar));
