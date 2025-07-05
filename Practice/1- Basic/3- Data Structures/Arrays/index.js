/*

3. Estructuras de Datos -> Arrays 
■ Crea un array con 5 elementos, añade y elimina elementos, recórrelo con 
for, forEach y map.

*/

const electronics = ['joystick','mouse','keyboard','speakers','headset']

// .push() => Inserts an element at the end and return the new array length
let newLength = electronics.push('webcam');
console.log("New array length: ", newLength);

//.unshift() => Inserts an element at the start and return the new array length
newLength = electronics.unshift('PS5');
console.log("New array length: ", newLength);

// .shift() => Removes and returns first element 
const prevFistElement = electronics.shift();
console.log("Deleted element: ", prevFistElement);
console.log("Current array: ", electronics);

// .pop() => Removes and return last element
const prevLastElement = electronics.pop();
console.log("Deleted element: ", prevLastElement);
console.log("Current array: ", electronics);

// .splice(fromIndex, elementsToDeleteCount) => Deletes the specified number of elements
// starting at the index provided, return all the deleted elements 
const moreDeletions = electronics.splice(0,2);
console.log("Deleted elemetns", moreDeletions);

console.log('\nFor:')
for (let index = 0; index < electronics.length; index++) {
    console.log(electronics[index]);
    
}

console.log("\nForEach: ")
electronics.forEach(element => {
    console.log(element);
});

console.log('\nforOf: ')
for (const element of electronics) {
    console.log(element);
}

console.log('\nMap: ')
const electronicsCopy = electronics.map((element)=>{ return `${element}`+" (Copy)" });

console.log(electronicsCopy);


/**
Crea un array de objetos (productos) y usa filter, find, some, every y     
reduce para diferentes operaciones. 
 */

const products = ['Garlic','Albim','Milk','Bezoar','Clay','Zutula','Rum']

// .filter  => Return an array with the elements that match
// the condition of the callback function
const filteredProducts = products.filter((product)=>{
    return product.endsWith('m');
});
console.log("Products ending with 'm'", filteredProducts);
// .find    => return the value of the first element where predicate
// is true, and undefined otherwise.
const foundProduct = products.find((product)=>{return product.includes('il')});
console.log('Got milk? ', foundProduct);
// .some    => Determines whether the specified callback function returns
// true for any element of an array.
const someProducts = products.some((product)=>{return product.length === 5});
console.log('Some products are 5 letters long? ', someProducts);
// .every   => Determines whether all the members of an array satisfy
// the specified test.
const everyProduct = products.every((product)=>{return product.endsWith('m')});
console.log("Every products ends with 'm' ? ", everyProduct);
// .reduce  => Calls the specified callback function for all the elements
// in an array. The return value of the callback function is the
// accumulated result, and is provided as an argument in the next
// call to the callback function.
const reducedProducts = products.reduce((accum, current)=>{ return accum+", "+current});
console.log(reducedProducts);

/**
Arrays multidimensionales: Crea un array que represente una matriz 3x3 y 
accede a un elemento específico (ej. el elemento en la fila 1, columna 2).
 */

const multiDimArr = [[1,2,3],
                  [4,5,6],
                  [7,8,9]];
console.log("Element at row 1, column 2: ", multiDimArr[1][2]);



/**
Objetos literales: Crea un objeto coche con propiedades marca, modelo, año 
y un método obtenerDescripcion() que devuelva una cadena con sus datos.
 */

const Car = {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2024,

    getDescription:  () => {
        return `This car is a ${Car.brand} ${Car.model} from ${Car.year}.`;
    }
}

console.log(Car.getDescription());

