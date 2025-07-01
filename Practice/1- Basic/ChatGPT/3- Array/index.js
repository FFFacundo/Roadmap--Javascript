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