const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./db');
const persons = require('./persons.json');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

morgan.token('content', req => JSON.stringify(req.body));

app.use(morgan((tokens, req, res) => [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens.status(req, res),
  tokens.res(req, res, 'content-length'), '-',
  tokens['response-time'](req, res), 'ms',
  tokens.content(req),
].join(' ')));

// app.use(morgan('tiny'));

app.get('/api/persons', (req, res) => {
  const response = db.findAll();
  if (response && response.type === 'Error') {
    res.status(response.status).json(response);
  } else {
    res.status(200).json(response);
  }
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const response = db.findOne(id);
  if (response && response.type === 'Error') {
    res.status(response.status).json(response);
  } else {
    res.status(200).json(response);
  }
});

app.post('/api/persons', (req, res) => {
  const { name } = req.body;
  const { number } = req.body;


  const newPerson = {
    name,
    number,
  };

  const response = db.create(newPerson);
  if (response && response.type === 'Error') {
    res.status(response.status).json(response);
  } else {
    res.status(201).json(response);
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const response = db.remove(id);
  if (response && response.type === 'Error') {
    res.status(response.status).json(response);
  } else {
    res.status(204).json(response);
  }
});

app.get('/info', (req, res) => {
  const personCount = persons.length;
  const date = new Date();
  res.send(`
    <p>Puhelinluettelossa on ${personCount} ihmisen tiedot.</p>
    <p>${date.toString()}</p>
    `);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
