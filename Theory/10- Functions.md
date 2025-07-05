# Functions
Functions are reusable blocks of code that perform a specific task. They can take parameters and return values, and are fundamental to structuring JavaScript programs. Functions help organize code, promote reuse, and enable abstraction.

## Defining and Calling Functions
Functions can be defined using function declarations, expressions, or arrow syntax. They are called by their name followed by parentheses, optionally passing arguments. Functions can be named or anonymous, and can be assigned to variables or passed as arguments.

## Function Parameters
Values passed to functions. JavaScript supports default and rest parameters for flexibility. Parameters allow functions to operate on different data each time they are called.

### Default params
Parameters with default values if no argument is provided, allowing functions to be called with fewer arguments. This makes functions more flexible and robust.

### Rest Params
Allows a function to accept an indefinite number of arguments as an array, using the `...` syntax. Useful for functions that need to handle variable numbers of inputs.

## Arrow Functions
Concise syntax for writing functions using `=>`. Arrow functions do not have their own `this` and are often used for short, simple functions, especially as callbacks or in array methods.

## IIFEs
Immediately Invoked Function Expressions are functions that run as soon as they are defined, often used to create a local scope and avoid polluting the global namespace.

## arguments object
An array-like object available inside functions that contains the arguments passed to the function. Not available in arrow functions. Useful for working with functions that accept a variable number of arguments.

## Scope & Function Stack
Scope determines the accessibility of variables. The function stack keeps track of function calls and their execution context. Understanding scope is key to avoiding bugs and writing maintainable code.

### Recursion
A function calling itself to solve a problem, useful for tasks that can be broken down into similar subtasks, such as traversing trees or calculating factorials.

### Lexical Scoping
Scope determined by the physical placement of code in the source file. Inner functions have access to variables of their outer functions, enabling powerful patterns like closures.

### Closures
Functions that remember the scope in which they were created, even after that scope has finished executing. Useful for data privacy, callbacks, and creating factory functions.

## Built-in Functions
JavaScript provides built-in functions like `parseInt()`, `isNaN()`, `eval()`, and others for common tasks. These functions are available globally and simplify many programming tasks.