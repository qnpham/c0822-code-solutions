/* exported isVowel */
/*
make a variable containing all lowercased vowels.
return vowels variable with include method, pass in parameter with lowercase method as
argument.
*/
function isVowel(char) {
  var vowels = 'aeiou';
  return vowels.includes(char.toLowerCase());
}
