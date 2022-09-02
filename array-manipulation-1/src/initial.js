/* exported initial */
/*
make an empty result array.
make a loop, starting from zero, as long as it is less than or equal to parameter length
minus two, increment by one.
in each iteration, on result array, use the push method passing in parameter at loop index as an argument.
return result after loop is done.
*/
function initial(array) {
  var result = [];
  for (var i = 0; i <= array.length - 2; i++) {
    result.push(array[i]);
  }
  return result;
}
