/* exported addSuffixToAll */
/*
make an array for result
make a loop that starts from zero and incriments as long as it is less than or equal to
the words array length minus one
in each iteration concatenate the value of suffix to words array at the index of the loop
push that concatenation into the result array
return result array from function
*/

function addSuffixToAll(words, suffix) {
  var result = [];
  for (var i = 0; i <= words.length - 1; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
