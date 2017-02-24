'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

// /**
//  * @api {get} /api/v1/listofvalues Test Apidocs
//  * @apiName Get All API-wide Apidocs
//  * @apiGroup Values
//  * @apiHeader token token
//  * @apiParam {string} nothing
//  * @apiSuccess (200) [array] Values Objects
//  * @apiSuccessExample {json} Success-Response:
//  *{
//  * "data": [
//  *  {
//  *   "id": 1,
//  *   "text": "hello",
//  *   "firstName": "navigo",
//  *   "lastName": "api",
//  *   "isAuthenticated": 1
//  *  }
//  * ]
//  *}
//  */
// router.get('/hi', controllers.user.test);
//
// router.post('/create', controllers.user.createUser);
//
// router.get('/get/:userId', controllers.user.getUser);
//
// router.put('/update', controllers.user.updateUser);
//
// router.delete('/delete', controllers.user.deleteUser);
//
// router.post('/authenticate', controllers.user.authenticateUser);
//
// router.post('/forgetPassword', controllers.user.forgetPassword);
//
// router.post('/resetPassword', controllers.user.resetPassword);

//get/retailer/?latitude=123.123&longitude=1231
router.get('/get/retailer/', controllers.user.getNearbyRetailers);

router.get('/get/profile/:firebase_uid', controllers.user.getProfile);

module.exports = router;
