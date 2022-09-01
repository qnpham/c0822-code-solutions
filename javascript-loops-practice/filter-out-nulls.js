/* exported filterOutNulls */
/*
make a result array
make a loop starting at zero and will increment as long as it is less than or equal to
parameter length minus one
make an if statement, if parameter at i index is not equal to null, then push
that value into result array
return result array
*/
function filterOutNulls(values) {
  var result = [];
  for (var i = 0; i <= values.length - 1; i++) {
    if (values[i] != null) {
      result.push(values[i]);
    }
  }
  return result;
}
