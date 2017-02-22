'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.post('/', controllers.notify.notify);

module.exports = router;
