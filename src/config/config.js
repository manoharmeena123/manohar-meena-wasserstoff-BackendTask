module.exports = {
    endpoints: [
        'http://localhost:3001/api/products',
        'http://localhost:3002/api/users',
        'http://localhost:3003/api/orders',
        // Add any additional endpoints as needed
    ],
    logging: {
        file: 'logs/requests.log'
    },
    rabbitMQ: {
          url: process.env.RABBITMQ_URL
    },
    mongoDB: {
        url: process.env.MONGODB_URI 
    },
    server: {
        port: process.env.PORT || 3000
    },
    queueName:{
        load_balancer_queue:process.env.QUEUE_NAME
    }
};
