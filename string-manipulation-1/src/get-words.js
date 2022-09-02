/* exported getWords */
/*
make an if statement, if parameter length equals to zero, then return an empty array.
else, return parameter with split method passing in a space in as an argument
*/
function getWords(string) {
  if (string.length === 0) {
    return [];
  } else {
    return string.split(' ');
  }
}
