/* exported swapChars */
/*
make a empty result string
make a variable set to the string parameter using the split method.
set variable at firstIndex to equal string parameter at secondIndex
set variable at secondIndex to equal string at firstIndex
start a for loop from zero and as long as it is less than or equal to variable length
minus one, it increments.
inside the loop code block, concatenate result with variable at loop index.
return result after loop is done.
*/
function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  var array = string.split('');
  array[firstIndex] = string[secondIndex];
  array[secondIndex] = string[firstIndex];
  for (var i = 0; i <= array.length - 1; i++) {
    result += array[i];
  }
  return result;
}
