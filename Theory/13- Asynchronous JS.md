# Asynchronous JavaScript
Asynchronous JavaScript allows code to run without blocking the main thread, enabling tasks like network requests, timers, and user interactions. It is essential for responsive web applications and efficient resource usage.

## setTimeout
Schedules a function to run after a specified delay. Useful for delaying actions, creating simple timers, or deferring code execution. The delay is specified in milliseconds.

## setInterval
Schedules a function to run repeatedly at specified intervals. Used for repeated actions like animations, polling, or updating the UI at regular intervals. The interval is specified in milliseconds.

## Callbacks
Functions passed as arguments to be executed after another function completes. Callbacks are the foundation of asynchronous programming in JavaScript, but can lead to deeply nested code if not managed carefully.

### Callback Hell
Refers to complex, nested callbacks that make code hard to read and maintain. This problem can be avoided by using promises or async/await, which provide a more linear and readable flow.

## Promises
Objects representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner way to handle async code than callbacks, supporting chaining and error handling with `.then()` and `.catch()` methods.

### async / await
Syntactic sugar for working with promises, allowing asynchronous code to be written in a synchronous style. `async` functions return promises, and `await` pauses execution until the promise resolves. This makes code easier to read, write, and maintain.
