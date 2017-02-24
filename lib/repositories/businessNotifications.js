'use strict';

const models = require('../models');

module.exports = {
  saveBusinessNotification,
  getCurrentBusinesses
};

function saveBusinessNotification (payload) {
  return new models.BusinessNotifications(payload).save();
}

function getCurrentBusinesses(timestamp) {
  let params = [timestamp, timestamp];
  let query = ` select * from businessNotifications bn where bn.from < ? and bn.to > ?; `;
  return new models.BusinessNotifications().getClient().raw(query, params)
      .then((data) => {
        return data;
      });
}