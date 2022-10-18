const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./data.json');

const notes = data.notes;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const key in notes) {
    array.push(notes[key]);
  }
  res.status(200);
  res.json(array);

});

app.get('/api/notes/:id', (req, res) => {
  const index = req.params.id;
  if (!Number.isInteger(Number(index)) || index < 1) {
    res.status(400);
    res.json({ error: 'id has to be a positive interger' });
  }
  for (const key in notes) {
    if (key === index) {
      res.json(notes[index]);
      return;
    }
  }
  res.status(404);
  res.json({ error: `Cannot find note with id of ${index}` });
});

app.post('/api/notes', (req, res) => {

  if (!req.body.content) {
    res.status(400);
    res.json({ error: 'content is a required field' });
    process.exit(1);
  }

  notes[data.nextId] = { id: data.nextId, content: req.body.content };
  data.nextId++;

  const stringData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringData, err => {
    if (err) {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occured.' });
      process.exit(1);
    } else {
      res.status(201);
      res.json(notes[data.nextId]);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const index = Number(req.params.id);
  if (!Number.isInteger(index) || index < 1) {
    res.status(400);
    res.json({ error: 'id has to be a positive interger' });
  } else if (!notes[index]) {
    res.status(404);
    res.json({ error: `Cannot find note with id of ${index}` });
  } else {
    delete notes[index];
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', stringData, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: 'An unexpected error occured.' });
        process.exit(1);
      } else {
        res.sendStatus(204);
      }
    });
  }

});

app.put('/api/notes/:id', (req, res) => {
  const index = Number(req.params.id);
  if (!Number.isInteger(index) || index < 1) {
    res.status(400);
    res.json({ error: 'id has to be a positive interger' });
  } else if (!req.body.content) {
    res.status(400);
    res.json({ error: 'content is a required field' });
  } else if (!notes[index]) {
    res.status(404);
    res.json({ error: `Cannot find note with id of ${index}` });
  } else {
    notes[index].content = req.body.content;
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', stringData, err => {
      if (err) {
        console.error(err);
        res.status(500);
        res.json({ error: 'An unexpected error occured.' });
        process.exit(1);
      } else {
        res.status(200);
        res.json(notes[index]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
