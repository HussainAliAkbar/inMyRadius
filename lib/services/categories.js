'use strict';
const repos = require('../repositories');
// const errorhandler = require('restify-errors');

module.exports = {
  getAllCategories
};

function getAllCategories(payload) {
  return repos.categories.getAll()
      .then((data) => {
        return data;
      });
}
