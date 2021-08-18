const counterFactory = require('../counterFactory').exportObjects.counterFactory;

const testObjectA = counterFactory();
const testObjectB = counterFactory();


console.log(testObjectA.increment()); // Output: 1
console.log(testObjectA.increment()); // Output: 2

console.log(testObjectA.decrement()); // Output: 1
console.log(testObjectA.decrement()); // Output: 0

console.log(testObjectA.increment()); // Output: 1


console.log(testObjectB.increment()); // Output: 1
console.log(testObjectB.increment()); // Output: 2
console.log(testObjectB.increment()); // Output: 3
console.log(testObjectB.increment()); // Output: 4
console.log(testObjectB.increment()); // Output: 5
console.log(testObjectB.decrement()); // Output: 4