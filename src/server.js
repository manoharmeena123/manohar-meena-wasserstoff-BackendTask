const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const loadBalancerRoutes = require('./routes/loadBalancerRoutes');
const logRequest = require('./middlewares/logger');
const { connectRabbitMQ } = require('./queues/rabbitMQ');
const { startQueueManager } = require('./services/queueManager');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logRequest);

app.use('/', apiRoutes);
app.use('/', loadBalancerRoutes);

const startServer = async () => {
    await connectRabbitMQ();
    await startQueueManager();
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();
