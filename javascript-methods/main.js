var a = 5;
var b = 3;
var c = 7;
var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);
var heros = ['Spiderman', 'Superman', 'Iron man', 'Batman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heros[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'book1',
    author: 'author1'
  },
  {
    title: 'book2',
    author: 'author2'
  },
  {
    title: 'book3',
    author: 'author3'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Quan Pham';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
