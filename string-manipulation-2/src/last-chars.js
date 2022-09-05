/* exported lastChars */
/*
make an if statement, if length parameter is greater than string parameter length, then
return string parameter.
else,
make a empty result string.
make an index variable value assigned to the length of string parameter minus length.
start a for loop from index variable and as long as it is less than or equal to string length minus one,
increment.
inside loop code block, concatenate result variable to string parameter at loop index.
return result after loops are done.
*/
function lastChars(length, string) {
  if (length > string.length) {
    return string;
  } else {
    var result = '';
    var index = string.length - length;
    for (var i = index; i <= string.length - 1; i++) {
      result += string[i];
    }
  }
  return result;
}
