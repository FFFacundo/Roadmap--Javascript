# Type Casting
Type casting refers to converting a value from one data type to another. In JavaScript, this can happen explicitly (by the programmer) or implicitly (by the engine). Understanding type casting is important to avoid unexpected results and bugs in your code.

## Explicit Type Casting
Explicit type casting (type conversion) is when you manually convert a value to another type using built-in functions like `String()`, `Number()`, or `Boolean()`. For example, `Number('123')` converts the string `'123'` to the number `123`. This is useful when you want to ensure a value is of a specific type before performing operations on it.

## Implicit Type Casting
Implicit type casting (type coercion) occurs when JavaScript automatically converts types to complete an operation, such as adding a number to a string. For example, `1 + '2'` results in the string `'12'` because the number is coerced to a string. Coercion can happen in arithmetic, comparisons, and other operations, sometimes leading to confusing results.

## Type Conversion vs Coercion
Type conversion is explicit and intentional, while type coercion is automatic and happens behind the scenes during operations. Being aware of the difference helps you write more predictable and reliable code. Always prefer explicit conversion when possible to avoid subtle bugs.