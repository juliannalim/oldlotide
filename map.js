// need to make this code to check assert equal 
// as a mentor -- implement map w 1 day 4
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

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

const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

// nothing below this line works 
// const resultsTwo = map(words, word => word[1]);

// const resultsThree = map(words, word => word.toLowerCase());
// const resultsFour = map(words, word => word.length);
// assertArraysEqual(resultsTwo, ['i', 't', 't', 'm']);
// assertArraysEqual(resultsThree, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
// assertArraysEqual(resultsFour, [6, 7, 2, 5, 3]);