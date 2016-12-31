'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.get('/hi', controllers.user.test);

module.exports = router;
