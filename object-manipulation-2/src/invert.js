/* exported invert */
/*
make a result empty object.
start a for in loop through parameter, in each iteration
for the result object, set the property of parameter at loop key to equal to loop key.
return result after loop.
*/
function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
