const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
console.log(assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));