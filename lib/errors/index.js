// 'use strict';
//
// const Util = require('util');
//
// // add toJSON method on error object so on stringify it will be able to generate JSON
// /*eslint no-extend-native:0 */
// Object.defineProperty(Error.prototype, 'toJSON', {
//   value: function() {
//     let alt = {};
//
//     Object.getOwnPropertyNames(this).forEach(function(key) {
//       alt[key] = this[key];
//     }, this);
//
//     return alt;
//   },
//   configurable: true
// });
//
// let ApplicationError = function(errorMessage, constructor) {
//
//   Error.captureStackTrace(this, constructor || this);
//
//   this.message = Util.format('%s: Error message was not specified.', this.name);
//   if (errorMessage) {
//     this.message = errorMessage;
//   }
//
//   this.httpCode = '500';
// };
//
// Util.inherits(ApplicationError, Error);
// ApplicationError.prototype.name = 'Application Error';
//
// let custom400Error = function(err) {
//   this.httpCode = '400';
//   this.error_message = err;
// };
// custom400Error.prototype.name = 'custom400Error';
// Util.inherits(custom400Error, ApplicationError);
//
// let Custom405Error = function(err) {
//   this.httpCode = '405';
//   this.error_message = err;
// };
// Custom405Error.prototype.name = 'Custom405Error';
// Util.inherits(Custom405Error, ApplicationError);
//
// let custom404Error = function(err) {
//   this.httpCode = '404';
//   this.error_message = err;
// };
// custom404Error.prototype.name = 'custom404Error';
// Util.inherits(custom404Error, ApplicationError);
//
// let Custom409Error = function(err) {
//   this.httpCode = '409';
//   this.error_message = err;
// };
// Custom409Error.prototype.name = 'custom409Error';
// Util.inherits(Custom409Error, ApplicationError);
//
// let Custom403Error = function(err) {
//   this.httpCode = '403';
//   this.error_message = err;
// };
// Custom403Error.prototype.name = 'Custom403Error';
// Util.inherits(Custom403Error, ApplicationError);
//
// let custom500Error = function(err) {
//   this.httpCode = '500';
//   this.error_message = err;
// };
// custom500Error.prototype.name = 'custom500Error';
// Util.inherits(custom500Error, ApplicationError);
//
// let inValidTokenError = function(err) {
//   this.httpCode = '401';
//   this.error_message = err ? err : 'inValidToken';
// };
// inValidTokenError.prototype.name = 'inValidTokenError';
// Util.inherits(inValidTokenError, ApplicationError);
//
// let accountDeactivatedError = function(err) {
//   this.httpCode = '400';
//   this.error_message = err ? err : 'AccountDeactivated';
// };
// accountDeactivatedError.prototype.name = 'AccountDeactivated';
// Util.inherits(accountDeactivatedError, ApplicationError);
//
// module.exports = {
//   ApplicationError,
//   custom400Error,
//   custom404Error,
//   Custom409Error,
//   custom500Error,
//   Custom403Error,
//   Custom405Error,
//   NotFoundError: custom400Error,
//   UnauthorizedError: inValidTokenError,
//   BadRequestError: custom400Error,
//   ConflictError: Custom409Error,
//   inValidTokenError,
//   AccountDeactivatedError: accountDeactivatedError
// };
