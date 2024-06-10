const express = require('express');
const router = express.Router();

router.get('/endpoint', (req, res) => {
    setTimeout(() => {
        res.send('Response from API 3');
    }, 1000); // Slow response
});

module.exports = router;
