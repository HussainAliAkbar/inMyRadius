'use strict';

let model = require('./mysql').extend({
  tableName: 'authenticationStings'
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
  obj.id = object.id;
  obj.userId = object.userId;
  obj.authenticationString = object.authenticationString;
  return obj;

};

model.prototype.preDelete = function preDelete(_Object) {
  return _Object;
};

// overriding base method
model.prototype.getObjectFromDBObject = function getObjectFromDBObject(_Object) {
  return _Object;
};

module.exports = model;
