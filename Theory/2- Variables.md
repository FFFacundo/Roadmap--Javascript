# Declaration
To use variables first we have to declare them, meaning "creating" them. In order to do that we use one of the following keywords: const, let and also var.

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
- Javascript variables should be self-descriptive, the name of your variables should accurately identify it, because your code becomes easier to read, understand and to work with. It should not be necessary to add comments for additional documentation.
- JS variables are case sensitive, therefore a variable "name" and "Name" are different.
- There are multiple case styles to choose from while naming a variable: camelCase (JS), PascalCase (JS), snake_case,  kebab-case.
You will usually find variables declared with *camelCase* name. This is a way of naming your variables, for instance: *myName*, *yourName*, *firstNameAndSecondName* and so on. You start your variable name with lowercase character and every "new" word that you want to include should be added with their first letter in uppercase.
There are exceptions for naming JS constants, privates and classes/components but in general, **strings**, **booleans**, **numbers**, **objects**, **arrays** or **functions** are declared with camelCase.

#### Naming Conventions: Boolean
Prefixes like: **is**, **are** or **has** help developers distinguish a boolean from another variable just by looking at it: *isPresent*, *areEqual*, *hasDiscount*.
#### Naming Conventions: Function & Methods
Functions are also written in camelCase, while telling what the function is doing by giving it a verb as a prefix in the name, like:

*function **getPrice** (productId) {...}*  
The verb you use can be anything really (e.g. apply, calculate, set, post, remove, insert, etc)

#### Naming Conventions: Class

In contrast to other JS data structures, classes in Javascript are declared with **PascalCase**, which is similar to camelCase with the difference being that The first letter is Uppercase instead of lowercase. Note that when a class constructor is called for a new instance, it should also be PascalCase, since that's how it was declared in the first place.

#### Naming Conventions: Private

There are times when you will find an underscore _  in front of a variable/function/method. This means they are meant to be *private*. This can't be really enforced by Javascript, but it at least tells us how it should or shouldn't be used.

(e.g. _getName (firstName, secondName) {...} )

#### Naming Conventions: Constant

As we know, constant are "variables" that are immutable. Declaring a variable with *const* will prevent it from being re-assigned, but if it is an array or object, it is important to consider that their internal properties ***can*** still be re-assigned.
If you want to signal that something should be immutable, you should name constants with all caps, and in snake_case if it has more than 1 word.

### Naming Conventions: Files

Most commonly we can see PascalCase and kebab-case when naming JS files. Frontend applications you will often see components named in PascalCase, while in backend applications kebab-case is the most used.
Depending on the system, which one you choose to name your files might cause some bugs, therefore the recommended case style is kebab-case.

# Scopes
In Javascript, the scope is the visibility and how can variables be used after they are declared. This scope depends on the keyword used to declare it and also where it was declared in the program.

### Local
Variables declared inside the functions are considered to be of the local scope of the function. The local scope is further divided into function and block scope.

### Function Scope
Variables declared inside a function are only accessible within that function and cannot be used outside of it. Each new functions creates a new scope and variables created with var, let and const are quite similar when declared ***inside a function***.

### Block Scope
Variables declared inside an if or switch conditions, for or while loops are also accessible within that particular conditions or loop. Variables between the curly braces are considered within block scope. This scope is only provided by ***let*** and ***const***. Declaring a variable with ***var*** inside a block won't have block scope.

### Global
Any variable declared outside functions or blocks ( curly braces {} ) have global scope, they can be accessed from anywhere in the program.
[Note] Assigning a value to an undeclared variable i.e ***blue = false*** it automatically becomes a global variable.
