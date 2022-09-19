/* exported reverseWords */
/*
make a string2 variable equal to string parameter concatenating with a space.
make a empty result string.
make another empty array.
make an empty string variable.

start a for loop from zero and as long as it is less than string parameter length
it increments.
inside loop code block make an if statement, if string parameter at loop index
is equal to space, then on the empty array use the push method and pass in string
variable and set string variable to be empty. else, concatenate string variable
with parameter at i.

start a for loop from zero and as long as it is less than array length, it increments.
inside loop code block, make another for loop starting from array length minus one
and as long as it is greater than negative one, it decrements.
inside loop code block, on the result string concatenate with array at loop 1 index
at loop 2 index.
make an if statement, if loop 1 is not equal to array length minus one, then
make an if statement, if loop 2 is at zero, then concatenate result with a space.
return result after loops.
*/
function reverseWords(string) {
  var string2 = string + ' ';
  var result = '';
  var array = [];
  var container = '';

  for (var i = 0; i < string2.length; i++) {
    if (string2[i] === ' ') {
      array.push(container);
      container = '';
    } else {
      container += string2[i];
    }
  }
  for (var j = 0; j < array.length; j++) {
    for (var z = array[j].length - 1; z > -1; z--) {
      result += array[j][z];
      if (j !== array.length - 1) {
        if (z === 0) {
          result += ' ';
        }
      }
    }
  }
  return result;
}
