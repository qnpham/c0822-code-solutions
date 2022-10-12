const fs = require('fs');
const argument = process.argv;

for (let i = 2; i < argument.length; i++) {
  fs.readFile(argument[i], 'utf-8', (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
}
