/* exported compact */
/*
make an empty result array.
make a loop, starting from zero and as long as it is less than or equal to parameter length
minus one, increment by one.
inside the loop code block, make an if statement.
if parameter at loop index equals is not falsy, push parameter at loop index into result array.
after the loop is done, use the push method on result array passing in parameter at loop index.
*/
function compact(array) {
  var result = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (!array[i] === false) {
      result.push(array[i]);
    }
  }
  return result;
}
