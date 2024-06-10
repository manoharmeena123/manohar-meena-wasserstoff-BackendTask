const { enqueueRequest, consumeRequests } = require('../queues/rabbitMQ');
const { handleRequest } = require('./loadBalancer');

const startQueueManager = async () => {
    await consumeRequests(handleRequest);
};

const enqueue = async (req, res) => {
    try {
        await enqueueRequest({ req, res });
        res.status(202).send('Request enqueued');
    } catch (error) {
        res.status(500).send('Error enqueuing request');
    }
};

module.exports = { startQueueManager, enqueue };
