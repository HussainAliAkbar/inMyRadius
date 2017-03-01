'use strict';
const repos = require('../repositories');
// const errorhandler = require('restify-errors');
const _ = require('lodash');
const kmToMilesConstant = 0.621371;
const rp = require('request-promise');

module.exports = {
  notify
};

function notify(payload) {
  return repos.businessNotifications.saveBusinessNotification(payload)
      .then(repos.consumer.getUsersAndLatLong)
    .then((userData) => {
      let sendNotificationsTo = [];
      _.each(userData, (user) => {
        let distance = haversine(payload.latitude, payload.longitude, user.latitude, user.longitude) ;
        if (distance < payload.radius) {
          sendNotificationsTo.push(getNotificationObject(user.firebase_instance_token, payload));
        }
      });
      let promises = [];
      _.each(sendNotificationsTo, (notificationObj) => {
        let options = {
          method: 'POST',
          uri: 'https://fcm.googleapis.com/fcm/send',
          headers: {
            Authorization: 'key=AAAAPYtAWQQ:APA91bFr_SOC3CPlpUZFWTj5L6cZoKxhH9bdMjMXZw0zru8HB_LuR6htmnCeJGJBO8e8iWFI7jvdE8cUXhTgj96s4LXGVq_6NIhfXB_tLoYfTBPdIiTchceqHB8e-YTq8v-vWctC-CIY',
            'Content-Type': 'application/json'
          },
          body: notificationObj,
          json: true
        };
        promises.push(rp(options));

      });
      return Promise.all(promises)
        .then((data) => {
          return data;
        });
    });
}


function haversine() {
  var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
  var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
  var R = 6372.8; // km
  var dLat = lat2 - lat1;
  var dLon = lon2 - lon1;
  var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.asin(Math.sqrt(a));
  return R * c;
}

function getNotificationObject(firebase_instance_token, payload) {
  return {
    'to' : firebase_instance_token,
    'data': {
      'category': payload.category,
      'contact_no': payload.contact_no,
      'description': payload.description,
      'firebase_uid': payload.firebase_uid,
      'from_time': payload.from,
      'latitude': payload.latitude,
      'longitude': payload.longitude,
      'name': payload.name,
      'radius': payload.radius,
      'to_time': payload.to
    },
    'notification': {
            'title' : `${payload.name} is nearby!`,
            'body' : payload.description
    }
  };

}