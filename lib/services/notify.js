'use strict';
const repos = require('../repositories');
// const errorhandler = require('restify-errors');
const _ = require('lodash');

module.exports = {
  notify
};

function notify(payload) {
  return repos.consumer.getUsersAndLatLong()
    .then((userData) => {
      _.each(userData, (user) => {
        console.log('this user:', user.firebase_uid);
      });
      return Promise.resolve(1);
    });

}
