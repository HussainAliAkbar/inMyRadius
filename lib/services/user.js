'use strict';
const repos = require('../repositories');

module.exports = {
  test,
  createUser
};

function test(payload) {
  console.log('yayy');
  return repos.user.getAll();
}

function createUser(payload) {
  console.log(payload);
  return repos.user.getAll();
}
