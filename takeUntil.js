const takeUntil = function(array, callback) {
  let result = [];
  for (elm of array) {
    // stating if the callback function is true
    // it will stop and return results
    if (callback(elm)) {
      // need to stop the loop once the condition is met
      return result;
    }
    // push elm when the callback is false, so it keeps going through the for loop
    result.push(elm);
  } 
}

// aka this
// const takeUntil = function(array, callback) {
//   let result = [];
//   for (elm of array) {
//     if (callback(elm) === false) {
//       result.push(elm)
//     } else if (callback(elm) === true) {
//       return result;
//     }
// }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);