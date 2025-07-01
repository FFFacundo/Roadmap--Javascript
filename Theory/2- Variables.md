# Declaration
To use variables first we have to declare them, meaning "creating" them. In order to do that we use one of the following keywords: <const>, <let> or <var>.


# Hoisting
According to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting):

"  *JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.*

*Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function**, *async function, and async function** *declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting*
*1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")*
*2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")*
*3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.*
*4. The side effects of a declaration are produced before evaluating the rest of the code that contains it.*

This means, no matter where your variables or functions are declared, they are moved to the top of their scopes, **regardless** of whether their scope is global or local. This only moves the declaration, not assignments, they are left in their place.

Interesting Article: [Understanding Hoisting in Javascript](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript) 

# Naming Rules
The name of your variables should accurately identify it, because your code becomes easier to read, understand and to work with.

# Scopes
a
