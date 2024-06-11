const axios = require('axios');
const config = require('../config/config');
const { logRequest } = require('../middlewares/logger');

const routeRequest = (req) => {
    const { method, originalUrl, body } = req;
    let selectedEndpoint = config.endpoints[0];

    // Custom routing logic
    if (originalUrl.includes('priority')) {
        selectedEndpoint = config.endpoints[1];
    } else if (method === 'POST' && body && body.length > 100) {
        selectedEndpoint = config.endpoints[2];
    } else {
        const randomIndex = Math.floor(Math.random() * config.endpoints.length);
        selectedEndpoint = config.endpoints[randomIndex];
    }

    return selectedEndpoint;
};

const handleRequest = async (req, res) => {
    const url = routeRequest(req);
    const startTime = Date.now();
    try {
        const response = await axios.get(url);
        const responseTime = Date.now() - startTime;
        logRequest(url, responseTime);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error occurred while routing the request');
    }
};

module.exports = { handleRequest };
