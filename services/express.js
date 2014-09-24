'use strict';
var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
 
var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(express.static(EXPRESS_ROOT));
app.listen(EXPRESS_PORT);


module.exports = app;