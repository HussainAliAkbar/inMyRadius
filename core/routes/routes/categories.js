'use strict';

const router = require('express').Router();
const controllers = require('../../controllers');

router.get('/', controllers.categories.getAllCategories);

module.exports = router;
