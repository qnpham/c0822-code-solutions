const fs = require('fs');
const data = process.argv[2] + '\n';
fs.writeFile('note.txt', data, error => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
});
