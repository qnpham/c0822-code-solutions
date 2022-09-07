/* exported ransomCase */
/*
make a result variable assigned to parameter at index 0 with lowercase method.
make a for loop starting from one and as long as it is less than or equal to
parameter length minus one, it increments by one.
make an if statement, if loop modulo 2 equals zero, then concatenate result with
parameter at loop index while using lowercase method on it.
else concatenate result with parameter at loop index while using uppercase method.
return after loop.
*/

function ransomCase(string) {
  var result = string[0].toLowerCase();
  for (var i = 1; i <= string.length - 1; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
