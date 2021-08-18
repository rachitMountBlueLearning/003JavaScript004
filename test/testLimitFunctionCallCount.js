const limitFunctionCallCount = require('../limitFunctionCallCount').exportObjects.limitFunctionCallCount;

const square = limitFunctionCallCount((item) => item*item, 1);
const cube = limitFunctionCallCount((item) => item*item*item, 3);


console.log(square(2)); // Expected Output: 4
console.log(square(4)); // Expected Output: Call Overflow Error: Function can't be called more than 1 times \n null
console.log(square(3)); // Expected Output: Call Overflow Error: Function can't be called more than 1 times \n null

console.log(cube(2)); // Expected Output: 8
console.log(cube(1)); // Expected Output: 1
console.log(cube(3)); // Expected Output: 27
console.log(cube(4)); // Expected Output: Call Overflow Error: Function can't be called more than 3 times \n null
console.log(cube(5)); // Expected Output: Call Overflow Error: Function can't be called more than 3 times \n null