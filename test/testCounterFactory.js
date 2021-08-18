const counterFactory = require('../counterFactory').exportObjects.counterFactory;

const testObjectA = counterFactory();
const testObjectB = counterFactory();


console.log(testObjectA.increment()); // Expected Output: 1
console.log(testObjectA.increment()); // Expected Output: 2

console.log(testObjectA.decrement()); // Expected Output: 1
console.log(testObjectA.decrement()); // Expected Output: 0

console.log(testObjectA.increment()); // Expected Output: 1


console.log(testObjectB.increment()); // Expected Output: 1
console.log(testObjectB.increment()); // Expected Output: 2
console.log(testObjectB.increment()); // Expected Output: 3
console.log(testObjectB.increment()); // Expected Output: 4
console.log(testObjectB.increment()); // Expected Output: 5
console.log(testObjectB.decrement()); // Expected Output: 4