/* exported chunk */
/*
make a result array
start a for loop starting from zero, as long as it's less than or equal to array parameter
length minus one, it increments by size parameter value.
in loop code block, on result array, use the push method passing in argument array
parameter using slice method with 2 arguments, i in first, and i plus size as second argument.
return result after loop
*/
function chunk(array, size) {
  var result = [];
  for (var i = 0; i <= array.length - 1; i = i + size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
