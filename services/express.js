'use strict';
var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
 
function startExpress() {
  var express = require('express');
  var app = express();
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
}
