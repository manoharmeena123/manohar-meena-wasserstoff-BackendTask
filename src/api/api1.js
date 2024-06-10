const express = require('express');
const router = express.Router();

router.get('/endpoint', (req, res) => {
    setTimeout(() => {
        res.send('Response from API 1');
    }, 100); // Fast response
});

module.exports = router;
