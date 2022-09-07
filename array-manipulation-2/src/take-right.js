/* exported takeRight */
/*
make an empty result array
make an index variable equal to array length minus count
make an if statement, if count is greater than array length then return array.
else,
start a for loop from index, and as long as it is less than or equal to array length
minus one, it increments.
inside the loop code block, push array at loop index into result.
return result after loop is done.
*/
function takeRight(array, count) {
  var result = [];
  var index = array.length - count;
  if (count > array.length) {
    return array;
  } else {
    for (var i = index; i <= array.length - 1; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
