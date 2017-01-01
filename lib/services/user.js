'use strict';
const repos = require('../repositories');

module.exports = {
  test
};

function test(payload) {
  console.log('yayy');
  return repos.user.getAll();
}
