# Object
Objects are complex data structures in JavaScript that allow you to store collections of key-value pairs. Keys are always strings (or symbols), and values can be of any type, including other objects. Objects are the foundation for most structures in JavaScript, including arrays and functions.

## Prototypal Inheritance
JavaScript uses prototypal inheritance, meaning that objects can inherit properties and methods from other objects. Each object has an internal link to another object called its prototype. When you try to access a property that does not exist on the object itself, JavaScript looks for it in the object's prototype chain.

## Object Prototype
The prototype is a special object from which other objects inherit properties and methods. All standard objects in JavaScript inherit from `Object.prototype` unless explicitly specified otherwise. You can access or set the prototype of an object using `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.

# Built-in Objects
JavaScript provides several built-in objects, such as `Object`, `Array`, `Function`, `Date`, `RegExp`, `Error`, and others. These objects provide useful methods and properties for working with data and performing common tasks.

# typeof operator
The `typeof` operator is used to determine the type of a value in JavaScript. For objects (including arrays and `null`), `typeof` returns "object". Note that `typeof null` also returns "object" due to a historical quirk in JavaScript.
