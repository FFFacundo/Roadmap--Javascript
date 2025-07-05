# Loops and Iterations
Loops allow you to execute a block of code multiple times. JavaScript provides several types of loops and iteration statements for different scenarios, making it easy to process collections, repeat actions, and control the flow of your program. Choosing the right loop depends on the task and the data structure you are working with.

## do...while statement
Executes a block of code at least once, and then repeats the loop as long as a specified condition is true. The condition is checked after each iteration, making it useful when you want the loop to run at least once regardless of the condition.

## while statement
Repeats a block of code as long as a specified condition is true. The condition is evaluated before each iteration, so the loop may not run at all if the condition is false from the start. Useful for loops where the number of iterations is not known in advance.

## for statement
The most common loop, used to repeat a block of code a specific number of times. It includes initialization, condition, and increment/decrement expressions. Ideal for iterating over arrays or running a loop a set number of times. The `for` loop is flexible and can be customized for many scenarios.

## for...in statement
Iterates over the enumerable properties of an object (keys). It is mainly used for iterating over object properties, not arrays, as the order is not guaranteed and it may include inherited properties.

## for...of statement
Iterates over iterable objects (like arrays, strings, maps, sets), returning each value. It is the preferred way to loop over arrays and other iterable collections, providing clean and readable code.

## break / continue
`break` exits the loop immediately, stopping further iterations. `continue` skips the current iteration and continues with the next one. Both are useful for controlling loop execution based on conditions.

## Labeled Statements
Labels can be used with `break` and `continue` to control flow in nested loops. By labeling a loop, you can break out of or continue a specific loop, even if it is nested inside another loop.
