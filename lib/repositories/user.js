'use strict';

const models = require('../models');

module.exports = {
  getAll
};

function getAll() {
  return new models.User().find().then((data) => {
    return data;
  });
}
