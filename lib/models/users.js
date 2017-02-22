'use strict';

let model = require('./mysql').extend({
  tableName: 'consumers'
});

model.prototype.getClientWithTableReference = function getClientWithTableReference() {
  return require('./mysql').client(this.tableName);
};

model.prototype.getClient = function getClient() {
  return require('./mysql').client;
};

// overriding base method
model.prototype.getDBObject = function getDBObject(object) {

  let obj = {};
  obj.firebase_uid = object.firebase_uid;
  obj.display_name = object.display_name;
  obj.email = object.email;
  obj.photo_url = object.photo_url;
  obj.latitude = object.latitude;
  obj.longitude = object.longitude;
  obj.address = object.address;
  obj.firebase_instance_token = object.firebase_instance_token;
  obj.createdAt = object.createdAt;
  obj.updatedAt = object.updatedAt;
  return obj;

};

model.prototype.preSave = function preSave(_Object) {
  if (_Object.id) {
    _Object.updatedAt = new Date();
  } else {
    _Object.createdAt = new Date();
    _Object.updatedAt = new Date();
  }
  return _Object;
};

model.prototype.preUpdate = function preUpdate(_Object) {
  _Object.updatedAt = new Date();
  return _Object;
};

model.prototype.preDelete = function preDelete(_Object) {
  return _Object;
};

// overriding base method
model.prototype.getObjectFromDBObject = function getObjectFromDBObject(_Object) {
  return _Object;
};

module.exports = model;
