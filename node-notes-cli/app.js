const fs = require('fs');
const operation = process.argv[2];
if (operation === 'read') {
  require('./read')();
} else if (operation === 'create') {
  const newData = require('./create');
  fs.writeFile('data.json', newData, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (operation === 'update') {
  const newData = require('./update');
  fs.writeFile('data.json', newData, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (operation === 'delete') {
  const newData = require('./delete');
  fs.writeFile('data.json', newData, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
