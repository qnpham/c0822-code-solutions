/* exported intersection */
/*
make a result array.
start a loop through the first parameter.
inside loop code block make an if statement,
if first parameter at loop is included in second
loop then push first parameter at loop into result
array.
return result array after loops.
*/
function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  return result;
}
