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
Represents whole numbers larger than 2<sup>53</sup> - 1, which is the largest number JavaScript can reliably represent with the `number` type. BigInts are created by appending `n` to the end of an integer literal (e.g., `123n`).

## symbol
Introduced in ES6, symbols are unique and immutable primitive values, often used as unique property keys in objects. Each symbol value returned from `Symbol()` is unique, even if they have the same description.
