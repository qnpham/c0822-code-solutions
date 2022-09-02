/* exported reverse */
/*
make an empty result array.
make a loop, starting from parameter length minus one, as long as it is greater
than or equal to zero, decrement by one.
in each iteration, push parameter at loop index into result array.
after the loop return result array
*/
function reverse(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
