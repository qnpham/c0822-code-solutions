/* exported firstChars */
/*
make a empty string result variable
make an if statement, if length parameter is greater than string parameter's length,
then make a loop starting from zero, and as long as it is less than or equal to string
parameter length minus one, it increments. inside this loop, concatenate result with
parameter at loop index
outside the loop code block, make an else statement,
make a loop starting from zero and as long as it is less than or equal to length parameter minus one.
increment by one.
inside loop code block, concatenate result with string parameter at loop index.
return result after both loops
*/
function firstChars(length, string) {
  var result = '';
  if (length > string.length) {
    for (var i = 0; i <= string.length - 1; i++) {
      result += string[i];
    }
  } else {
    for (var j = 0; j <= length - 1; j++) {
      result += string[j];
    }
  }
  return result;
}
