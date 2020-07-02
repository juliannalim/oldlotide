function eqArrays(arrayOne, arrayTwo) {
  if (typeof (arrayOne) !== 'object' || typeof (arrayTwo) !== 'object') {
    return false;
  }
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

const eqObjects = function (objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }
  for (let key in objectOne) {
    if (Array.isArray(objectOne[key])) {
      if (!eqArrays(objectOne[key], objectTwo[key])) {
        return false;
      }
    } else if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑Assertion Failed: ${actual} === ${expected}`;
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
console.log(assertObjectsEqual(ab, ba));

const hi = { a: "the", b: "potato" };
const ih = { b: "potato", a: "the" };
eqObjects(hi, ih); // => true
console.log(assertObjectsEqual(hi, ih));
