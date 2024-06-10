const express = require('express');
const { enqueueRequest } = require('../services/queueManager');

const router = express.Router();

router.get('/loadbalanced-endpoint', enqueueRequest);

module.exports = router;
