const express = require('express');
const router = express.Router();

router.get('/endpoint', (req, res) => {
    setTimeout(() => {
        res.send('Response from API 2');
    }, 500); // Medium response
});

module.exports = router;
