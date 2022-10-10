/* exported zip */
/*
make a result array.
make a container array.
get the length of first parameter and second parameter. use Math.Min to select
the one with the shortest length and loop over it.

in loop code block, in each iteration push first
and second array at loop variable into container
array.

make a checkContainer function and put it in each if statement.
in function code block, make an if statement, if container array
length is equal to 2, then push container array
into result array and make container array empty.

return result last.
*/
function zip(first, second) {
  var result = [];
  var container = [];

  var smallestLength = Math.min(first.length, second.length);
  for (var i = 0; i < smallestLength; i++) {
    container.push(first[i]);
    container.push(second[i]);
    checkContainer();
  }
  function checkContainer() {
    if (container.length === 2) {
      result.push(container);
      container = [];
    }
  }
  return result;
}
