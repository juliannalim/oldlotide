const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');


//Test Code
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
// //console.log(result1);
console.log(assertEqual(countOnly["Jason"], 1));
assertEqual(countOnly["Karima"], undefined);
assertEqual(countOnly["Fang"], 2);
