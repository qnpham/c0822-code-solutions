/* exported flatten */
/*
create a result array
start a for loop from zero and if it is less than array length it increments.
inside loop code block make an if statement, if array at loop length is less than
one then push array at loop into result array.

else, start another for loop from zero and as long as it is less than array at
loop length, it increments. inside loop code block make an if statement,
if array at first loop at second loop length is less than one then push
array at first loop at second loop into result array.

else, start another for loop from zero and as long as it is less than array at first
loop at second loop length, it increments. if array at first loop at second loop
at third loop length is less than one then push array at first loop at
second loop at third loop into resullt array.

else, start another for loop from zero and as long as it is less than array at first
loop at second loop at third loop length, it increments. inside loop codeblock,
if array at first loop at second loop at third loop length is less than one
it pushes array at first loop at second loop at third loop at fourth loop until result
array.
*/
function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length < 1) {
      result.push(array[i]);
    }
  }
}
