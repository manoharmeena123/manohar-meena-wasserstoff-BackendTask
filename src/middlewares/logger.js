const fs = require('fs');
const path = require('path');
const config = require('../config/config');

// Ensure the logs directory exists
const logDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, 'requests.log');

const logRequest = (req, res, next) => {
    const startTime = Date.now();
    res.on('finish', () => {
        const responseTime = Date.now() - startTime;
        const log = `Method: ${req.method}, URL: ${req.originalUrl}, Status: ${res.statusCode}, Response Time: ${responseTime}ms\n`;
        fs.appendFileSync(logFile, log);
    });
    next();
};

module.exports = logRequest;
