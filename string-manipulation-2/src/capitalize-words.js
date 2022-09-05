/* exported capitalizeWords */
/*
make a empty string result variable
make an array equal to parameter using split method passing in space inside string as argument
make a for loop starting from zero and as long as it is less than or equal to array length minus one,
it increments.
inside that loop codeblock, make another for loop. Start this loop from zero and as long
as it is less than or equal to array at first loop's length minus one, it increments.
inside this nested loop, make an if statement. if this nested loop's variable is equal to zero,
then concatenate result with array at initial loop index 0 and nested loop index 0 using captialize method.
else, concatenate array at both loop indexes using lowercase method.
under nested loop, make an if statement. If initial loop less than array length minus one
then concatenate result with a space
return result after all loops are done
*/
function capitalizeWords(string) {
  var result = '';
  var array = string.split(' ');
  for (var i = 0; i <= array.length - 1; i++) {
    for (var j = 0; j <= array[i].length - 1; j++) {
      if (j === 0) {
        result += array[i][j].toUpperCase();
      } else {
        result += array[i][j].toLowerCase();
      }
    }
    if (i < array.length - 1) {
      result += ' ';
    }
  }
  return result;
}
