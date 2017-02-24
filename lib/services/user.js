'use strict';
const repos = require('../repositories');
// const errorhandler = require('restify-errors');

module.exports = {
  test,
  createUser,
  getNearbyRetailers,
  getProfile
};

function getProfile(payload) {
  let promises = [repos.consumer.findById(payload.firebase_uid), repos.categories.getAllForUser(payload.firebase_uid)];
  return Promise.all(promises)
      .then((data) => {
    let userData = data[0][0];
    let categoriesData = data[1][0];
    return {
      user: userData,
      categories: categoriesData
    };
      });
}

function getNearbyRetailers(payload) {

}

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
