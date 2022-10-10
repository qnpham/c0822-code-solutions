/* exported equal */
/*
make a result variable equal to false.
if first length is equal to zero and second length is equal to zero then return true.
start a for loop from zero and as long as it is less than first parameter length,
it increments. inside loop code block make an if statement, if first paramater at
loop is equal to second parameter at loop and if first parameter at loop plus one
is equal to second parameter at loop plus one then set result to true.
else if first is equal to undefined and second is equal to defined then set result
to true.
else, return false.
return result after loop.
*/
function equal(first, second) {
  var result = false;
  if (first.length === 0 && second.length === 0) {
    return true;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i] && first[i + 1] === second[i + 1]) {
      result = true;
    } else if (first === undefined && second === undefined) {
      result = true;
    } else return false;
  }
  return result;
}
