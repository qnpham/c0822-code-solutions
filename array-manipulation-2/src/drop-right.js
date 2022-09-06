/* exported dropRight */
/*
make an empty result array
make a condition variable equal to array length minus count minus one
make an if statement, if count is greater than array length then return an empty array.
else,
start a for loop from zero, and as long as it is less than or equal to condition,
it increments.
inside the loop code block, use push on result variable passing in array at loop index
return result variable after loop
*/
function dropRight(array, count) {
  var result = [];
  var condition = array.length - count - 1;
  if (count > array.length) {
    return [];
  } else {
    for (var i = 0; i <= condition; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
