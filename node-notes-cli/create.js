const data = require('./data.json');
const inputText = process.argv[3];
data.notes[data.nextId] = inputText;
data.nextId++;
const stringData = JSON.stringify(data, null, 2);
module.exports = stringData;
