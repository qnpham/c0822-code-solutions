/* exported isPalindromic */
/*
make an empty array
make another empty array
make a for loop through parameter string starting from zero and increments as long as it is
less than source parameter length. in each iteration make an if statement, if parameter
at loop index is not equal to space, then
push parameter at loop variable into string1 array.

make another for loop through string parameter but start from length -1 and as
long as it is greater than -1 decrement. in each iteration make an if statement,
if parameter at loop variable is not equal space, then
push parameter at loop variable into string2 array.

make another loop, starting from zero and as long as it is less than the length of
one of the array variables, it increments. inside loop code block make an if statement,
if array1 loop index is not equal to array2 at loop index then return false,
else,
return true
*/
function isPalindromic(string) {
  var array1 = [];
  var array2 = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      array1.push(string[i]);
    }
  }
  for (var j = string.length - 1; j > -1; j--) {
    if (string[j] !== ' ') {
      array2.push(string[j]);
    }
  }
  for (var z = 0; z < array1.length; z++) {
    if (array1[z] !== array2[z]) {
      return false;
    }
  }
  return true;
}
