/* exported sumAll */
/*
assign a variable to the first index of numbers
make a loop starting at second index and incrementing by one.
loop will continue as long as it is less than or equal to numbers length subtracted by one
in every iteration, add numbers at loop index to the variable with the first index of numbers
return first variable

*/

function sumAll(numbers) {
  var result = numbers[0];
  for (var i = 1; i <= numbers.length - 1; i++) {
    result += numbers[i];
  }
  return result;
}
