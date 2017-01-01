'use strict';

const path = require('path');
const services = require(path.resolve(__dirname + '../../../lib/services'));

module.exports = {
  test,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  authenticateUser,
  forgetPassword,
  resetPassword
};

function createUser(req, res, next) {
  let payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
  return services.user.createUser(payload)
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function getUser(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function updateUser(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function deleteUser(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function authenticateUser(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function forgetPassword(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function resetPassword(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function test(req, res, next) {
  return services.user.test({testing: 1})
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}
