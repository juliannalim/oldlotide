// need to git 
// can't push this code 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

function eqArrays (arrayOne, arrayTwo) {
  /* if (typeof(arrayOne) !== 'object' || typeof(arrayTwo) !== 'object') {
    return false;
  }
  */
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
    return false  
   }
  }
  return true;
}

module.exports = eqArrays;