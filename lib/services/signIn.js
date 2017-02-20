'use strict';
const repos = require('../repositories');
// const errorhandler = require('restify-errors');
const _ = require('lodash');

module.exports = {
  consumer,
  retailer
};

function consumer(payload) {
  // console.log(payload);
  // let myErr = new errorhandler.BadRequestError({
  //   statusCode: 409,
  //   message: 'almostttt'
  // });
  // return Promise.resolve(new errorhandler.BadRequestError('ouch'));
  // return repos.user.getAll();

  return repos.consumer.findById(payload.firebaseUid)
      .then((data) => {
        if (data[0].length !== 0) {
          return {message: 'success'};
        } else {
          let categoriesArr = [];

          if (payload.categories) {
            _.each(payload.categories, (category) => {
              categoriesArr.push({
                firebaseUid: payload.firebaseUid,
                categoryId: category
              });
            });
          }
          return Promise.all([repos.consumer.saveConsumer(payload), repos.consumer.saveCategories(categoriesArr)])
              .then((data) => {
                return {message: 'success'};
              });
        }
      });
}

function retailer(payload) {

}
