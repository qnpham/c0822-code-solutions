/* exported pick */
/*
make an empty result object
start a loop from zero and as long as it is less than or equal to keys parameter length
minus one, it increments.
inside loop code block, make a for in loop, looping through source parameter.
make an if statement, if keys parameter at i is equal to source parameter key variable
then set loop key variable property of result object equal to loop key variable
of source parameter.
return result object after loops.
*/
function pick(source, keys) {
  var result = {};
  for (var i = 0; i <= keys.length - 1; i++) {
    for (var x in source) {
      if (keys[i] === x && source[x] !== undefined) {
        result[x] = source[x];
      }
    }
  }
  return result;
}
