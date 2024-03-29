// need to ask a mentor about this
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
console.log(assertEqual(eqObjects(ab, ba), true));


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log(assertEqual(eqObjects(cd, dc), true));


const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(assertEqual(eqObjects(cd, cd2), false));
