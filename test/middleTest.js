// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// Test Code
// console.log(assertArraysEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));

const assert = require('chai').assert;
const head   = require('../middle');

describe("#middle", () => {
  it('returns ["2", "3"] for ["1", "2", "3", "4"]', () => {
    assert.deepEqual(head(["1", "2", "3", "4"]), ["2", "3"]);
  });

  it('returns ["c"] for ["a", "b", "c", "d", "e"]', () => {
    assert.deepEqual(head(["a", "b", "c", "d", "e"]), ["c"]);
  });

});