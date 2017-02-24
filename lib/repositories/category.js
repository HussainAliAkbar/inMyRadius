'use strict';

const models = require('../models');

module.exports = {
  getAll,
  getAllForUser
};

function getAllForUser(firebase_uid) {
  let params = [firebase_uid];
  let query = ` select * from userCategories where firebase_uid = ? ; `;
  return new models.Consumer().getClient().raw(query, params)
      .then((data) => {
        return data;
      });

}

function getAll() {
  return new models.Categories().find()
      .then((data) => {
        console.log(data);
        return data;
      })
}
