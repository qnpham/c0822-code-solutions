const express = require('express');
const app = express();

const grades = {};
let id = 1;

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.post('/api/grades', (req, res) => {
  grades[id] = req.body;
  grades[id].id = id;
  res.status(201);
  res.send(grades[id]);
  id++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
