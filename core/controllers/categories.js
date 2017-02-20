'use strict';

const path = require('path');
const services = require(path.resolve(__dirname + '../../../lib/services'));

module.exports = {

  getAllCategories
};

function getAllCategories(req, res, next) {
  return services.categories.getAllCategories()
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}
