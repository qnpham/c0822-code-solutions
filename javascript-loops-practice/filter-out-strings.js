/* exported filterOutStrings */
/*
make a result array
make a loop starting from zero, and will increment as long as it is less than or equal to
parameter length minus one
make an if statement, if data type of parameter at loop index is not equal to string
then push that parameter value into result
return result
*/

function filterOutStrings(values) {
  var result = [];
  for (var i = 0; i <= values.length - 1; i++) {
    if (typeof values[i] !== 'string') {
      result.push(values[i]);
    }
  }
  return result;
}
