'use strict';

const models = require('../models');

module.exports = {
  findById,
  saveConsumer,
  saveCategories,
  updateToken
};

function findById(firebase_uid) {
  let params = [firebase_uid];
  let query = ` select * from users where firebase_uid = ? ; `;
  return new models.Consumer().getClient().raw(query, params)
      .then((data) => {
        return data;
      });
}

function saveConsumer(payload) {
  return new models.Consumer(payload).save();
}

function saveCategories(categoriesArr) {
  return new models.UserCatergories(categoriesArr).saveInBatch();
}

function updateToken(firebase_uid, firebase_instance_token) {
  let params = [firebase_instance_token, firebase_uid];
  let query = ` update users set firebase_instance_token = ? where firebase_uid = ?`;
  return new models.Consumer().getClient().raw(query, params)
    .then((data) => {
      return data;
    });

}
