const amqp = require('amqplib');
const config = require('../config');

const queueName = 'load_balancer_queue';

let channel;

const connectRabbitMQ = async () => {
    try {
        const connection = await amqp.connect(config.rabbitMQ.url);
        channel = await connection.createChannel();
        await channel.assertQueue(queueName, { durable: true });
        console.log('Connected to RabbitMQ');
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
};

const enqueueRequest = async (req) => {
    if (!channel) {
        throw new Error('RabbitMQ channel not initialized');
    }
    const request = JSON.stringify(req);
    await channel.sendToQueue(queueName, Buffer.from(request), { persistent: true });
};

const consumeRequests = async (handleRequest) => {
    if (!channel) {
        throw new Error('RabbitMQ channel not initialized');
    }
    await channel.consume(queueName, async (msg) => {
        if (msg !== null) {
            const req = JSON.parse(msg.content.toString());
            await handleRequest(req);
            channel.ack(msg);
        }
    });
};

module.exports = { connectRabbitMQ, enqueueRequest, consumeRequests };
