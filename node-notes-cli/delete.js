const data = require('./data.json');
const index = process.argv[3];
delete data.notes[index];
const stringData = JSON.stringify(data, null, 2);
module.exports = stringData;
