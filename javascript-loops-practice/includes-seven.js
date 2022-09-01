/* exported includesSeven */
/*
make a result variable and assign it to false.
make a loop starting from zero and increment as long as it is less than or equal to parameter length
minus one.
make an if statement, if parameter at loop index strictly equals seven then set
result variable to true,
return result variable after loop.
*/

function includesSeven(array) {
  var result = false;
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === 7) {
      result = true;
    }
  }
  return result;
}
