/* exported flatten */
/*
make a result array.
loop through the array parameter.
if array at loop variable is not an array, then push
push that value into result array.
else,
start another loop and off of array at first loop.
push everytime in array at first loop at second loop
into result variable.
return result after loops
*/
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      for (var j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    }
  }
  return result;
}
