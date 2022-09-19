/* exported titleCase */
/*
make a result string
make an exception array
set an array to equal string using split method, passing in space as argument.
make a function to return a string with the first letter capitalized.
the function will take word as a parameter. inside function code block make a result string.
start a loop from zero and as long as it is less than word length, it increments.
inside loop code block make an if statement, of loop variable is at zero then
concatenate result string with word parameter at loop variable using uppercase
method. else, concatenate word parameter at loop variable using lowercase method.
return result string after loops.

declare a includesDash function passing in word as parameter. Inside function code
block make a tempString variable.
and start a for loop from zero and as long as it is less than word parameter
length, it increments. if loop variable is zero then on tempString concatenate
word at loop variable using uppercase method. else if,
if word parameter at loop is not equal
to dash then concatenate it with tempString using lowercase method.
else,
concatenate tempString with a dash and concatenate tempString with word at
loop plus one using uppercase method and increment loop by one.
return tempString after loops.

start an loop from zero with condition loop is less than length of array. make it
increment by one everytime an increment is done.

Inside loop make an if statement, if array at loop using lowercase method is equal
to api, then concatenate API to result string.
else if array loop using lowercase method is equal to javascript, then concatenate
result string with JavaScript.

else if array at loop variable using lowercase method is equal to javascript:, then
concatenate result string with JavaScript:.

else if array at loop variable includes dash then on the resultString concatenate
includesDash function passing in array at loop.

else if array at loop variable using lowercase function is included in exception
array then concatenate result with array at loop using capitalize function

else if loop variable is at zero then concatenate result string with array at loop
using capitalize function.
else if array at loop length is greater than 3 then concatenate result string
with array at loop using the capitalize function.

else concatenate array at loop variable using lowercase method

make an if statement. if array at loop at array value length minus one is equal
to colon then, if array at loop is not space then concatenate a space and then concatenate array at loop
variable plus one using capitalize function and increment loop variable by one.

make an if statement. if loop variable is less than array length minus one
then concatenate a space to result string.

return result after loops
*/
function titleCase(string) {
  var result = '';
  var exception = ['web', 'cat', 'hat', 'ham', 'pet', 'i', 'get', 'hop', 'pop'];
  var array = string.split(' ');
  function capitalize(word) {
    var tempResult = '';
    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        tempResult += word[i].toUpperCase();
      } else {
        tempResult += word[i].toLowerCase();
      }
    }
    return tempResult;
  }

  function includesDash(word) {
    var tempString = '';
    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        tempString += word[i].toUpperCase();
      } else if (word[i] !== '-') {
        tempString += word[i].toLowerCase();
      } else {
        tempString += '-';
        tempString += word[i + 1].toUpperCase();
        i++;
      }
    }
    return tempString;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === 'api') {
      result += 'API';
    } else if (array[i].toLowerCase() === 'javascript') {
      result += 'JavaScript';
    } else if (array[i].toLowerCase() === 'javascript:') {
      result += 'JavaScript:';
    } else if (array[i].includes('-') === true) {
      result += includesDash(array[i]);
    } else if (exception.includes(array[i].toLowerCase())) {
      result += capitalize(array[i]);
    } else if (i === 0) {
      result += capitalize(array[i]);
    } else if (array[i].length > 3) {
      result += capitalize(array[i]);
    } else {
      result += array[i].toLowerCase();
    }

    if (array[i][array[i].length - 1] === ':') {
      result += ' ';
      result += capitalize(array[i + 1]);
      i++;
    }
    if (i < array.length - 1) {
      result += ' ';
    }
  }
  return result;
}
