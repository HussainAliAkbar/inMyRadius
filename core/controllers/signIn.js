'use strict';

const path = require('path');
const services = require(path.resolve(__dirname + '../../../lib/services'));

module.exports = {
  consumer,
  retailer
};

function consumer(req, res, next) {
  let payload = {
    firebase_uid: req.body.firebase_uid,
    display_name: req.body.display_name,
    email: req.body.email,
    photo_url: req.body.photo_url,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    firebase_instance_token: req.body.firebase_instance_token,
    address: req.body.address,
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
