// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");


// const words = ["what is up", "Lighthouse", "Labs"];
// tail(words); // no need to capture the rebturn value since we are not checking it
// assertEqual(words.length, 3);

// console.log(tail(['hi']));
// console.log(tail([]));

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns ["Lighthouse", "Labs"] for ["What is up", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["What is up ", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('return empty array for ["hi"]', () => {
    assert.deepEqual(tail(['hi']), []);
  })

  it('return empty array for empty array', () => {
    assert.deepEqual(tail([]), []);
  })
  
  
});
