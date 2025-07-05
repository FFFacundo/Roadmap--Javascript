# Modules in JavaScript
Modules allow you to organize code into separate files and reuse functionality. JavaScript supports different module systems for different environments, making it easier to manage large codebases and share code between projects.

## CommonJS
The module system used in Node.js. Modules are loaded using `require()` and exported with `module.exports`. CommonJS modules are synchronous and best suited for server-side applications. They allow you to split code into reusable components and manage dependencies easily.

## ECMAScript Modules
The standard module system for JavaScript. Modules are imported using `import` and exported with `export` keywords. ECMAScript modules are supported natively in modern browsers and Node.js. They enable static analysis, tree shaking, and better tooling support for modern JavaScript development.
