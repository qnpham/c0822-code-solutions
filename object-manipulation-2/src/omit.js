/* exported omit */
/*
make an empty result object.
start a for in loop through source parameter.
inside loop code block, make an if statement. if keys parameter does not include
loop key, then loop key property of result equals loop key of source
return result after loop
*/
function omit(source, keys) {
  var result = {};
  for (var x in source) {
    if (keys.includes(x) === false) {
      result[x] = source[x];
    }
  }
  return result;
}
