/* exported union */
/*

make a result array equal to the first parameter.

make a notIncludes function with a word parameter.
inside function code block loop through the first
parameter. inside loop code block make an if statement,
if word is equal to first parameter at loop then
return false. else, return true.

loop through first parameter and in each iteration
push first parameter at loop into result array.

start a loop through second parameter.
inside loop code block make an if statement,
if calling notIncludes passing in second parameter
at loop returns true, then on result array push
second parameter at loop.

return result after loops.
*/
function union(first, second) {
  var result = [];

  function notIncludes(word) {
    for (var i = 0; i < first.length; i++) {
      if (word === first[i]) {
        return false;
      }
    }
    return true;
  }

  for (var i = 0; i < first.length; i++) {
    result.push(first[i]);
  }

  for (var z = 0; z < second.length; z++) {
    if (notIncludes(second[z])) {
      result.push(second[z]);
    }
  }

  return result;
}
