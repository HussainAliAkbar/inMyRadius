'use strict';

const routes = require('./routes')();

function setupRoutes(app) {
  app.use('/api/user', routes.user);
  // app.use('/api/chat', routes.chat);
}

function appRoutes(app) {
  app.use('/', routes.main);

  setupRoutes(app);
}

module.exports = appRoutes;
