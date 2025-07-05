# Data Types

It refers to the type of data that a variable can or will hold. In JavaScript there are 7 primitive data types:
- string
- number
- boolean
- bigint
- null
- undefined
- Symbol

Objects are non-primitives. In JS, we can put any type in a variable, since it can for example hold a string and later store a number, since it's a dynamic and weakly typed language.

---

# Primitive Types
- All primitive types except for *null* can be tested with the *typeof* operator. Using `typeof null` returns "object", so to test for null you must use `=== null`.
- Excluding *null* and *undefined*, all primitive types have their object wrapper types, which provide useful methods for working with their values. When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead. Trying to access a property of *null* or *undefined* throws a TypeError exception.

[See more: optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

**Note:** *undefined* indicates the absence of a value, while *null* indicates the absence of an object.

## string
This primitive type holds a sequence of characters, and there is no separate type for a single character. In JavaScript, strings are written between a pair of single, double quotation marks, or backticks: ***(' ') , (" ") , (\` \`)***. You can use any of these as long as the starting and ending quote are the same.

## number
Represents both integer and floating-point numbers. JavaScript uses double-precision 64-bit binary format (IEEE 754) for all its numeric values. There is no separate type for integers and floats. Special numeric values include `NaN` (Not-a-Number), `Infinity`, and `-Infinity`.

## boolean
Represents a logical entity and can have only two values: `true` or `false`. Booleans are commonly used for conditional testing and control flow in programs.

## null
Represents the intentional absence of any object value. It is a primitive value that indicates that a variable should point to no object. It is often used to reset or clear variables.

## undefined
Indicates that a variable has been declared but has not yet been assigned a value. It is the default value for uninitialized variables and for missing function parameters.

## bigint
Represents whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the `number` type. BigInts are created by appending `n` to the end of an integer literal (e.g., `123n`).

## symbol
Introduced in ES6, symbols are unique and immutable primitive values, often used as unique property keys in objects. Each symbol value returned from `Symbol()` is unique, even if they have the same description.

---

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
