'use strict';

const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const responseFormatter = require('./formatter/response');
const compression = require('compression');
const methodOverride = require('method-override');

const app = module.exports = express();

app.set('title', 'navigo-API');
process.env.PORT = config.get('port');

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.use(methodOverride());
app.use(compression());

app.use(responseFormatter.formatResponse);
require('./routes/appRoutes')(app); // load all routes

require('./bootstrap/globalAsync')().then(() => {
  app.listen(process.env.PORT);
}).catch(function(e) {
  // log error here
  console.log(e);
  // global.Logger.crash(e);
});
