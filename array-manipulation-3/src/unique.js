/* exported unique */
/*
make a result array.
make a doesNotInclude function with a word parameter.
inside function code block, loop through result array.
if word is equal to result array at loop then return
false.
else return true.

start a loop through parameter.
inside loop code block make an if statement, if
calling doesNotInclude passing in array at loop
returns true then push array at loop into result.

return result after loops.
*/
function unique(array) {
  var result = [];
  function doesNotInclude(word) {
    for (var i = 0; i < result.length; i++) {
      if (word === result[i]) {
        return false;
      }
    }
    return true;
  }

  for (var i = 0; i < array.length; i++) {
    if (doesNotInclude(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
