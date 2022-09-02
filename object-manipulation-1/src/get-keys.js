/* exported getKeys */
/*
make a empty result array
make a for in loop with object parameter
in each iteration push the value of the loop into result array
return result array after the loop is done
*/
function getKeys(object) {
  var result = [];
  for (var x in object) {
    result.push(x);
  }
  return result;
}
