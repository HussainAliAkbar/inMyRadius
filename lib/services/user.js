'use strict';
const repos = require('../repositories');
const errorhandler = require('restify-errors');

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
  // let myErr = new errorhandler.BadRequestError({
  //   statusCode: 409,
  //   message: 'almostttt'
  // });
  // return Promise.resolve(new errorhandler.BadRequestError('ouch'));
  return repos.user.getAll();
}
