/* exported countdown */
/*
make a result array containing the given number
make a loop starting from the given number minus one and decrement it
loop will continue as long as it is greater than or equal to zero
in each iteration push the value of the loop into result array
return result array from the function
*/

function countdown(number) {
  var result = [number];
  for (var i = number - 1; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
