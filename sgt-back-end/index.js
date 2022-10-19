const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  SELECT "gradeId" as "id",
          "name",
          "course",
          "score"
          from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200);
      res.json(result.rows);
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });

});

app.post('/api/grades', (req, res) => {
  const input = req.body;
  if (!input.name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  }
  if (!input.course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  }
  if (!input.score) {
    res.status(400).json({ error: 'score is a required field' });
    return;
  }
  if (!Number.isInteger(input.score) || input.score < 1 || input.score > 100) {
    res.status(400).json({ error: `${input.score} is not a valid interger between 1-100` });
    return;
  }

  const sql = `
  insert into "grades"("name", "course", "score")
  values ($1, $2, $3)
  `;
  const dbArray = [req.body.name, req.body.course, req.body.score];
  db.query(sql, dbArray)
    .then(() => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured.' });
    });

});

app.put('/api/grades/:gradeId', (req, res) => {
  const input = req.body;
  const index = Number(req.params.gradeId);

  if (!Number.isInteger(index)) {
    res.status(400).json({ error: `${req.params.gradeId} is not an valid Id` });
    return;
  }
  if (!input.name) {
    res.status(400).json({ error: 'name is a required field' });
    return;
  }
  if (!input.course) {
    res.status(400).json({ error: 'course is a required field' });
    return;
  }
  if (!input.score) {
    res.status(400).json({ error: 'score is a required field' });
    return;
  }
  if (!Number.isInteger(input.score) || input.score < 1 || input.score > 100) {
    res.status(400).json({ error: `${input.score} is not a valid interger between 1-100` });
    return;
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;
  const dbArray = [req.body.name, req.body.course, req.body.score, index];
  db.query(sql, dbArray)
    .then(value => {
      if (value.rows.length === 0) {
        res.status(404).json({ error: `no id with a value of ${index} found!` });
        return;
      }
      res.status(200).json(req.body);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured.' });
    })
  ;

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const index = Number(req.params.gradeId);
  if (!Number.isInteger(index)) {
    res.status(400).json({ error: `${req.params.gradeId} is not an valid Id` });
    return;
  }
  const dbArray = [index];
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  db.query(sql, dbArray)
    .then(value => {
      if (value.rows.length === 0) {
        res.status(404).json({ error: `no id with a value of ${index} found!` });
        return;
      }
      res.sendStatus(204);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured.' });

    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000!');
});
