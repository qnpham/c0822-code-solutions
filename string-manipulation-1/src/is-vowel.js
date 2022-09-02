/* exported isVowel */
/*
make a variable containing all lowercased vowels.
return vowels variable with include method, pass in parameter with lowercase method as
argument.
*/
function isVowel(char) {
  var vowels = 'a e i o u';
  return vowels.includes(char.toLowerCase());
}
