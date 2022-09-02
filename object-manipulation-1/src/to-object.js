/* exported toObject */
/*
make an empty object
property key for the object is going to be from parameter at index 0
value key for the object is going to be from parameter at index 1
make parameter at index 0 the property of object, and the value of the key is
the value of parameter at index 1.
return object
*/
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
