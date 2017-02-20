'use strict';

const path = require('path');
const services = require(path.resolve(__dirname + '../../../lib/services'));

module.exports = {
  consumer,
  retailer
};

function consumer(req, res, next) {
  let payload = {
    firebaseUid: req.body.firebaseUid,
    displayName: req.body.displayName,
    email: req.body.email,
    photoUrl: req.body.photoUrl,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    categories: req.body.categories
  };
  return services.signIn.consumer(payload)
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}

function retailer(req, res, next) {
  let payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };
  return services.signIn.retailer(payload)
      .then((user) => {
        res.json(user);
      })
      .catch(next);
}
