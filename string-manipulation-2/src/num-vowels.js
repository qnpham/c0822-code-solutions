/* exported numVowels */
/*
make a counter variable equal to zero
start a for loop from zero, and as long as it is less than or equal to parameter length minus one,
increment.
inside loop, make an if statement, if parameter at loop index using lowercase method is equal to a, e, i, o, or u,
increment counter by one.
after the loop return counter.
*/
function numVowels(string) {
  var counter = 0;
  for (var i = 0; i <= string.length - 1; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      counter++;
    }
  }
  return counter;
}
