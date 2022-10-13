const data = require('./data.json');
const read = () => {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }

};
module.exports = read;
