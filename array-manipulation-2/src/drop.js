/* exported drop */
/*
make a result array
make an if statement, if count is greater than array length then return an empty array.
else,
start a loop at count, as long as it is less than or equal to array length minus one
increment.
inside loop code block, push result with array at loop index
return result after loop.
*/
function drop(array, count) {
  var result = [];
  if (count > array.length) {
    return [];
  } else {
    for (var i = count; i <= array.length - 1; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
