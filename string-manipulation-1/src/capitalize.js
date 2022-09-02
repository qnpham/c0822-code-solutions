/* exported capitalize */
/*
make a result variable containing parameter at index 0 with capitalize method.
create a loop starting from 1, and increments by one as long as it's value is less than
or equal to parameter length minus one.
in each iteration, concatenate result variable with string at loop index with lower case method
return result variable
*/
function capitalize(word) {
  var result = word[0].toUpperCase();
  for (var i = 1; i <= word.length - 1; i++) {
    result += word[i].toLowerCase();
  }
  return result;
}
