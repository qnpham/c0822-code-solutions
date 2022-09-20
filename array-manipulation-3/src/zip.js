/* exported zip */
/*
make a result array.
make a container array.
if first parameter length is less than second parameter
length, then loop through first array parameter.
else, start a loop through second array parameter.

in loop code blocks, in each iteration push first
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

  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      container.push(first[i]);
      container.push(second[i]);
      checkContainer();
    }
  } else {
    for (var z = 0; z < second.length; z++) {
      container.push(first[z]);
      container.push(second[z]);
      checkContainer();
    }
  }

  function checkContainer() {
    if (container.length === 2) {
      result.push(container);
      container = [];
    }
  }
  return result;
}
