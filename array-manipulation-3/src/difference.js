/* exported difference */
/*
make a result array.
start a loop through the first array parameter.
inside code block make an if statement.
if first array at loop is not included in second array
then push first array at loop into result.

start a loop through the second array.
inside code block make an if statement.
if second array at loop is not included in first array
then push second array at loop into result.

return result after loops.
*/
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  for (var z = 0; z < second.length; z++) {
    if (!first.includes(second[z])) {
      result.push(second[z]);
    }
  }
  return result;
}
