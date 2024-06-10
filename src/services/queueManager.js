const { Queue, PriorityQueue, RoundRobinQueue } = require('../queues');
const { handleRequest } = require('./loadBalancer');

const requestQueue = new Queue(); // Change to PriorityQueue or RoundRobinQueue as needed

const processQueue = async () => {
    while (requestQueue.size() > 0) {
        const { req, res } = requestQueue.dequeue();
        await handleRequest(req, res);
    }
};

const enqueueRequest = (req, res) => {
    requestQueue.enqueue({ req, res });
    processQueue();
};

module.exports = { enqueueRequest };
