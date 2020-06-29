
// TEST/ASSERTION FUNCTIONS
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


// ACTUAL FUNCTION
const middle = function(array) {
  let middleNum = [];
  if (array.length < 3) {
    return middleNum;
  }
  // if there is an even number of arrays, there will be two arrays in the middle
  else if (array.length %2 === 0) {
    // array.length/2 - 1 to get one of the arrays ex. 4/2 - 1 to get 1
    middleNum.push(array[(array.length/2)-1]);
    // ex 4/2 will get you 2
    middleNum.push(array[array.length / 2]);
  } else {
    // if it an odd number of array, it will just include middle single number
    middleNum.push(array[(array.length - 1) / 2]);
  }
  return middleNum;
}

module.exports = middle;