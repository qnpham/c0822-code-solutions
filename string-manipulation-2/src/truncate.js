/* exported truncate */
/*
make an empty result string
make an if statement, if length parameter is bigger than string parameter's length
then make a for loop starting at zero and as long as it is less than or equal to string parameter's length minus one, it increments,
inside the loop code block, concatenate result to string at loop index
else,
make a for loop, start from zero and as long as it is less than or equal to
length parameter minus one, it incriments by one.
in loop code block, concatenate result string to parameter string at loop index.
after the loop concatenate an ellipsis to the result string.
return result string.
*/
function truncate(length, string) {
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
  result += '...';
  return result;
}
