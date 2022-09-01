/* exported getIndexes */
/*
make a container array for result
the loop will always start from zero and increment by one
the loop will continue to run as long as it is less than or greater to the length of array minus one
in each iteration push the value of the loop into result array
return result array
*/

function getIndexes(array) {
  var result = [];
  for (var i = 0; i <= array.length - 1; i++) {
    result.push(i);
  }
  return result;
}
