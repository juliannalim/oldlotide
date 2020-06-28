const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  potato: "life"
};

function findKeyByValue (bestTvShowByGenre, givenMovie) {
  for (let title in bestTvShowByGenre) {
      //console.log(bestTvShowByGenre[title]);
    if(bestTvShowByGenre[title] === givenMovie) {
      return title;
    }
  }

};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "life"), "potato"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
