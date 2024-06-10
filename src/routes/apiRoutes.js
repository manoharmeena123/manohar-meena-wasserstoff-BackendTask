const express = require('express');
const api1 = require('../api/api1');
const api2 = require('../api/api2');
const api3 = require('../api/api3');

const router = express.Router();

router.use('/api1', api1);
router.use('/api2', api2);
router.use('/api3', api3);

module.exports = router;
