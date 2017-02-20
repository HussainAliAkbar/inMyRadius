'use strict';

const models = require('../models');

module.exports = {
  getAll
};

function getAll() {
  return new models.Categories().find()
      .then((data) => {
        console.log(data);
        return data;
      })
}
