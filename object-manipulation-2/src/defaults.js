/* exported defaults */
/*
make an empty array
start a for in loop to get the keys of target.
in each iteration push key into array.
make another separate for in loop to loop through source keys.
make an if statement, if array does not include loop key, then on target parameter
set loop key to be property and the value to be equal to loop key property of source.
return target after loops
*/
function defaults(target, source) {
  var array = [];
  for (var key in target) {
    array.push(key);
  }
  for (var x in source) {
    if (array.includes(x) === false) {
      target[x] = source[x];
    }
  }
  return target;
}
