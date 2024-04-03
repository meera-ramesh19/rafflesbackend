const express = require('express');

const app = express();
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());

const rafflesController = require('./controllers/raffleController.js');
// const participantsController = require('./controllers/participantsController.js');


app.get('/', (req, res) => {
  res.status(200).send('Welcome to Raffles backend!');
});
app.use('/api/raffles', rafflesController);
// app.use('/api/participants', participantsController);
// app.use('/api/winners', winnersController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


app.get('*', (req, res) => {
    res.status(404).send('Not found');
  });
  
module.exports = app;
