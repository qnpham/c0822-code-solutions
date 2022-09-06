/* exported includes */
/*
start a for loop from zero, as long as it is less than or equal to array length minus
one, it increments.
inside the loop code block make an if statement, if array at loop index is equal
to value, then return true.
else,
return false.
*/
function includes(array, value) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
