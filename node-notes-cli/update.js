const data = require('./data');
const index = process.argv[3];
const inputText = process.argv[4];
console.log(index);

data.notes[index] = inputText;
const stringData = JSON.stringify(data, null, 2);
module.exports = stringData;
