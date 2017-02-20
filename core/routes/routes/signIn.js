'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.post('/user', controllers.signIn.consumer);

router.post('/retailer', controllers.signIn.retailer);

module.exports = router;
