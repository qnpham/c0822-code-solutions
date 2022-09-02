/* exported tail */
/*
make an empty result array.
make a loop, starting from 1 and increments as long as it is less than or equal to parameter length
minus one.
in each iteration, use push method from result array, passing in parameter at loop index.
return result array after the loop is done.
*/
function tail(array) {
  var result = [];
  for (var i = 1; i <= array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}
