# Data Structures
Data structures are ways to organize and store data efficiently. JavaScript provides several built-in data structures for different use cases, allowing you to manage collections of data in various forms. Choosing the right data structure can improve performance and code clarity.

## Indexed Collections
Collections where elements are accessed by their numeric index. These are ideal for ordered data and fast access by position.

### Arrays
Arrays are ordered lists of values. Elements can be of any type and are accessed by their index. Arrays provide many useful methods for adding, removing, and manipulating elements, such as `push`, `pop`, `shift`, `unshift`, `splice`, and more. Arrays are zero-indexed and can dynamically grow or shrink in size.

### Typed Arrays
Typed arrays are array-like objects for handling binary data. They store elements of a specific numeric type (e.g., `Int8Array`, `Float32Array`). Typed arrays are useful for performance-critical applications, such as graphics and audio processing, and for working with raw binary data from files or network streams.

## Structured Data
Structured data formats allow you to represent and exchange complex data. They are essential for communication between systems and for storing hierarchical information.

### JSON
JSON (JavaScript Object Notation) is a lightweight data-interchange format, widely used for storing and exchanging data. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is commonly used in APIs and web applications to transfer data between client and server.

## Keyed Collections
Collections where values are associated with unique keys. These structures are ideal for mapping relationships and ensuring uniqueness.

### Map
`Map` is a collection of key-value pairs where keys can be of any type, including objects. Maps remember the original insertion order of the keys and provide efficient methods for adding, retrieving, and deleting entries. They are more flexible than plain objects for dynamic key-value storage.

### WeakMap
`WeakMap` is similar to `Map`, but keys must be objects and are held weakly, allowing garbage collection when there are no other references to the object. This is useful for managing private data associated with objects without preventing their cleanup.

## Set
`Set` is a collection of unique values, where each value can occur only once. Sets are useful for storing distinct elements, checking for existence, and removing duplicates from arrays. They provide methods like `add`, `delete`, and `has`.

## WeakSet
`WeakSet` is like `Set`, but its values must be objects and are held weakly, allowing garbage collection. WeakSets are useful for tracking objects without preventing their removal from memory.
