'use strict';

const path = require('path');
const services = require(path.resolve(__dirname + '../../../lib/services'));

module.exports = {
  notify
};

function notify(req, res, next) {
  let payload = {
    firebase_uid: req.body.firebase_uid,
    radius: req.body.radius,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    category: req.body.category,
    contact_no: req.body.contact_no,
    name: req.body.name,
    description: req.body.description

  };
  return services.notify.notify(payload)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
}