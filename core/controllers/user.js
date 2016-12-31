'use strict';

const path = require('path');
const services = require(path.resolve(__dirname + '../../../lib/services'));

module.exports = {
  test
};

function test(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}
