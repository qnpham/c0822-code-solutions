var array = [{
  isbn: '9780439403962',
  title: 'Clifford, the Big Red Dog',
  author: 'Norman Bridwell'
},
{
  isbn: '9780670074921',
  title: 'Diary of a Wimpy Kid',
  author: 'Jeff Kinney'
},
{
  isbn: '9780747532743',
  title: "Harry Potter and the Philosopher's Stone",
  author: 'J. K. Rowling'
}];
console.log('array:', array);
console.log('typeof array:', typeof array);
var string = JSON.stringify(array);
console.log('array stringifify:', string);
console.log('typeof array stringify:', typeof string);

var myJSON = '{"id": "239487239487","name": "Kim Park"}';
console.log('myJSON:', myJSON);
console.log('typeof myJSON:', typeof myJSON);
var parsedJSON = JSON.parse(myJSON);
console.log('parsedJSON:', parsedJSON);
console.log('typeof parsedJSON:', typeof parsedJSON);
