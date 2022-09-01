/* exported findIndex */
/*
make a loop that starts from zero and increments by 1 as long as it is less than or equal to array parameter length
minus one.
inside loop code block, make an if statement, if array parameter at loop index is strictly equals to value parameter,
then return the value of the loop.
else, return -1.
*/

function findIndex(array, value) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
