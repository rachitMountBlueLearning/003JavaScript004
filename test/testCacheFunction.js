const cacheFunction = require('../cacheFunction').exportObjects.cacheFunction;

const square = cacheFunction((item) => item*item);
const cube = cacheFunction((item) => item*item*item);


console.log(square(2)); // Expected Output: From Call \n 4
console.log(square(4)); // Expected Output: From Call \n 16
console.log(square(2)); // Expected Output: From Cache \n 4

console.log(cube(2)); // Expected Output: From Call \n 8
console.log(cube(1)); // Expected Output: From Call \n 1
console.log(cube(3)); // Expected Output: From Call \n 27
console.log(cube(2)); // Expected Output: From Cache \n 8
console.log(cube(3)); // Expected Output: From Cache \n 27