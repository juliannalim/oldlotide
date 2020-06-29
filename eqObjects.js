// need to ask a mentor about this
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqObjects = function(objectOne, objectTwo) {
  for (let letter in objectOne) {
    
    if (objectOne[letter] !== objectTwo[letter]) {
      return false;
    }
    if (objectOne[letter].length !== objectTwo[letter].length) {
      return false;
    } 
    else {
      return true;
  }

  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

