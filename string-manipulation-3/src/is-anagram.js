/* exported isAnagram */
/*
make an empty array1
make an empty array2
start a loop from zero and as long as it is less than firstString length, it increments.
inside loop code block, make an if statement. if firstString at loop index is not
equal to space then use push method on array1 and push firstString at loop index.

start a loop from zero and as long as it is less than secondString length, it increments.
make an if statement, if secondString at loop index is not equal to space, then
push secondString at loop index into array2.

start a third loop from zero and as long as it is less than array2 length, it increments.
inside loop code block make an if statement. if array2 at loop index is equal to
array1 at index 0, then on array1 use the shift method. On array2 use splice method
and remove character at loop index.
set loop variable to -1.

after loops make an if statement, if array 1 at index 0 is equal to array 2 at index
0 then return true, else return false.
*/
function isAnagram(firstString, secondString) {
  var array1 = [];
  var array2 = [];

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      array1.push(firstString[i]);
    }
  }

  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      array2.push(secondString[j]);
    }
  }
  for (var z = 0; z < array2.length; z++) {
    if (array2[z] === array1[0]) {
      array1.shift();
      array2.splice(z, 1);
      z = -1;
    }
  }

  if (array1[0] === array2[0]) {
    return true;
  } else return false;
}
