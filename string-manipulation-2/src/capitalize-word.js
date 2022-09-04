/* exported capitalizeWord */
/*
make a result variable containing the first index of parameter while using a capitalize method.
make an if statement, if parameter with lowercase method is equal to javascript, then return JavaScript.
else,
make a for loop starting from one and as long as it is less than or equal to the
parameter's length minus one, it increments.
inside the loop code block, concatenate result variable with parameter at loop index,
while having the lowercase method applied to parameter.
return result after the loop.
*/
function capitalizeWord(word) {
  var result = word[0].toUpperCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    for (var i = 1; i <= word.length - 1; i++) {
      result += word[i].toLowerCase();
    }
  }
  return result;
}
