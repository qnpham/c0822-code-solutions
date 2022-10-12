const fs = require('fs');
const data = String(Math.floor(Math.random() * 100)) + '\n';
fs.writeFile('random.txt', data, error => {
  if (error) {
    console.error('error', error);
    process.exit(1);
  }
});
