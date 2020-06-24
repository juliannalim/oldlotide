function without (original, itemsToRemove) {
  newArray = [];
  for (let i = 0; i < original.length; i++) {
    let insert = true;
    for (let j = 0; j < itemsToRemove.length; j++) { 
      if (original[i] === itemsToRemove[j]) {
        insert = false;
      }
    }
    if (insert === true) {
      newArray.push(original[i]);
    }
  }
  return newArray;
};

function assertArraysEqual (arrayOne, arrayTwo) {
  if (typeof(arrayOne) !== 'object' || typeof(arrayTwo) !== 'object') {
   return `🛑🛑🛑 Assertion Failed: ${[arrayOne]} !== ${[arrayTwo]}`;
  } 
  if (arrayOne.length !== arrayTwo.length) {
   return `🛑🛑🛑 Assertion Failed: ${[arrayOne]} !== ${[arrayTwo]}`;
  } 
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return `🛑🛑🛑 Assertion Failed: ${[arrayOne]} !== ${[arrayTwo]}`;
    }
  }
 return `✅✅✅ Assertion Passed: ${[arrayOne]} === ${[arrayTwo]}`;
};

function eqArrays (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }  
  return true;
};

console.log(without([1,2,3],[3]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world"]));