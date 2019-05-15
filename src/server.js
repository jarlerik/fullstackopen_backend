require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const personService = require('./personService');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('build'));
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


app.get('/api/persons', (req, res, next) => {
  personService.findAll()
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch(next);
});

app.get('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  personService.findOne(id)
    .then(response => res.status(response.status).json(response))
    .catch(next);
});

app.post('/api/persons', (req, res, next) => {
  const { name, number } = req.body;

  personService.create({ name, number })
    .then(response => res.status(201).json(response))
    .catch(next);
});

app.put('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, number } = req.body;

  personService.update({ id, name, number })
    .then(response => res.status(response.status).json(response))
    .catch(next);
});

app.delete('/api/persons/:id', (req, res, next) => {
  const { id } = req.params;
  personService.remove(id)
    .then(response => res.status(response.status).json(response.data))
    .catch(next);
});

app.get('/info', (req, res, next) => {
  const date = new Date();
  personService.count()
    .then(count => res.send(`
      <p>Puhelinluettelossa on ${count} ihmisen tiedot.</p>
      <p>${date.toString()}</p>
    `))
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const {
    status, name, message,
  } = error;

  const errorResponse = {
    name,
    message,
  };

  logger.error(error);
  res.status(error.status).json({ status, error: errorResponse });
};
app.use(errorHandler);

const env = process.env.ENVIRONMENT;
app.listen(port, () => logger.log(`[${env}] App listening on port ${port}`));
