/* exported getValues */
/*
make an empty result array
make a for in loop to get into object parameter
inside the loop code block, use the push method of result array and the argument
will be object parameter and will be selecting the key through the loop variable
return result after the loop
*/
function getValues(object) {
  var result = [];
  for (var key in object) {
    result.push(object[key]);
  }
  return result;
}
