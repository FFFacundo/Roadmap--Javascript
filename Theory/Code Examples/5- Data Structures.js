// Ejemplos de Estructuras de Datos

// --- Arrays ---
let arreglo = [1, 2, 3, 4];
arreglo.push(5); // [1,2,3,4,5]
console.log(arreglo[2]); // 3

// --- Typed Arrays ---
let buffer = new ArrayBuffer(8);
let int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42

// --- JSON ---
let persona = { nombre: 'Ana', edad: 25 };
let json = JSON.stringify(persona); // objeto a JSON
console.log(json); // '{"nombre":"Ana","edad":25}'
let obj = JSON.parse(json); // JSON a objeto
console.log(obj.nombre); // 'Ana'

// --- Map ---
let mapa = new Map();
mapa.set('a', 1);
mapa.set('b', 2);
console.log(mapa.get('a')); // 1

// --- WeakMap ---
let objKey = {};
let weakmap = new WeakMap();
weakmap.set(objKey, 'valor');
console.log(weakmap.get(objKey)); // 'valor'

// --- Set ---
let conjunto = new Set([1, 2, 2, 3]);
conjunto.add(4);
console.log(conjunto.has(2)); // true
console.log([...conjunto]); // [1,2,3,4]

// --- WeakSet ---
let obj1 = {};
let obj2 = {};
let weakset = new WeakSet([obj1]);
weakset.add(obj2);
console.log(weakset.has(obj1)); // true
