/* exported reverseWord */
/*
make a result variable containing an empty string.
make a loop, starting from parameter length minus one, decrement it by one as long as
loop is greater than or equal to zero.
in each iteration, concatenate result variable to parameter at loop index.
return result variable when finished.
*/
function reverseWord(word) {
  var result = '';
  for (var i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  return result;
}
