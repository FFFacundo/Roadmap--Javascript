# Equality Comparisons
Equality comparisons determine if two values are considered equal in JavaScript. There are different operators and algorithms for comparing values, each with its own rules and use cases. Understanding these differences is crucial for writing correct and predictable code, especially when dealing with type coercion and special values like `NaN` or objects.

## Value Comparison Operators
Operators used to compare values. These are fundamental in conditionals, loops, and data validation.

### ==
The loose equality operator (`==`) compares values for equality after performing type coercion if necessary. It can lead to unexpected results due to automatic type conversion. For example, `0 == false` is `true`, and `'' == 0` is also `true`.

### ===
The strict equality operator (`===`) compares both value and type, without type coercion. It is generally recommended for most comparisons because it avoids the pitfalls of type coercion. For example, `0 === false` is `false`.

### Object.is
`Object.is()` determines if two values are the same value, similar to `===` but with some differences for special cases like `NaN` (where `Object.is(NaN, NaN)` is `true`) and `-0` vs `0` (where `Object.is(-0, 0)` is `false`).

## Equality Algorithms
JavaScript uses different internal algorithms to determine equality in various contexts, such as collections, array methods, and the language core.

### isLooselyEqual
Algorithm used by the `==` operator for loose equality, allowing type coercion. It follows complex rules to convert and compare values of different types.

### isStrictlyEqual
Algorithm used by the `===` operator for strict equality, requiring both value and type to match. It is straightforward and does not perform type conversion.

### SameValueZero
Algorithm used in some array methods and collections, treating `NaN` as equal to `NaN` and `-0` as equal to `0`. Used in methods like `Array.prototype.includes` and `Set`.

### SameValue
Algorithm used internally for strict sameness, similar to `Object.is()`, but with subtle differences in edge cases. It is used in the language specification for certain operations.
