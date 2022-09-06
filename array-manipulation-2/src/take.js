/* exported take */
/*
make an empty result array
make an if statement, if count parameter is greater than array length then return array
else,
make a loop starting from zero and as long as it less less than or equal to count
parameter it increments.
inside loop code block push in parameter at loop index into result
return result array after loop is done.
*/
function take(array, count) {
  var result = [];
  if (count > array.length) {
    return array;
  } else {
    for (var i = 0; i <= count - 1; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
