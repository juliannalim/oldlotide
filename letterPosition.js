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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    if (i !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    //console.log(item);
    }
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);