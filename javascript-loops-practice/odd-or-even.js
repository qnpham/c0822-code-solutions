/* exported oddOrEven */
/*
make a result array.
make a loop starting from zero and increments by one as long as it is less than
or equal to parameter length minus one.
inside the loop code block, make an if statement, if parameter at loop index modulo 2 is equal to zero
then push even into result array, else push odd.
*/

function oddOrEven(numbers) {
  var result = [];
  for (var i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}
