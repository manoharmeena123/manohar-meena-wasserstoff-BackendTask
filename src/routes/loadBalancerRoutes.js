const express = require('express');
const { enqueue } = require('../services/queueManager');

const router = express.Router();

router.get('/loadbalanced-endpoint', enqueue);

module.exports = router;
