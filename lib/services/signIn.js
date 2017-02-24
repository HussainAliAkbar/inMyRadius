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

  return repos.consumer.findById(payload.firebase_uid)
      .then((data) => {
        if (data[0].length !== 0) {
          return repos.consumer.updateToken(payload.firebase_uid, payload.firebase_instance_token)
            .then(() => {
              return {message: 'success'};
            })
        } else {
          let categoriesArr = [];

          if (payload.categories) {
            _.each(payload.categories, (category) => {
              categoriesArr.push({
                firebase_uid: payload.firebase_uid,
                category_id: category.category_id
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
