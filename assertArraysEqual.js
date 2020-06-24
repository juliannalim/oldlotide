// need to git 
function assertArraysEqual (arrayOne, arrayTwo) {
   if (typeof(arrayOne) !== 'object' || typeof(arrayTwo) !== 'object') {
    return `🛑🛑🛑 Assertion Failed: ${[arrayOne]} !== ${[arrayTwo]}`;
  } if (arrayOne.length !== arrayTwo.length) {
    return `🛑🛑🛑 Assertion Failed: ${[arrayOne]} !== ${[arrayTwo]}`
  } for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return `🛑🛑🛑 Assertion Failed: ${[arrayOne]} !== ${[arrayTwo]}`
    }
  }
  return `✅✅✅ Assertion Passed: ${[arrayOne]} === ${[arrayTwo]}`;
}



console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays(['hello'], 'abc'));