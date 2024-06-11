const express = require('express');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const graphqlRoutes = require('./routes/graphqlRoutes');
const loadBalancerRoutes = require('./routes/loadBalancerRoutes');
const logRequest = require('./middlewares/logger');
const { connectRabbitMQ } = require('./queues/rabbitMQ');
const { startQueueManager } = require('./services/queueManager');
const { connection } = require('./config/database');
const config = require('./config/config');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logRequest);


// app.use('/', (req, res)=>{
//     res.status(200).json({ message: 'Welcome to the API' });
// })
// Routes===================================================================>
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/graphql', graphqlRoutes);

// Load Balancer Routes======================================================>
app.use('/', loadBalancerRoutes);


// Server====================================================================>
const startServer = async () => {
    try {
        await connection();
        console.log('Database connected successfully');

        await connectRabbitMQ();
        console.log('RabbitMQ connected successfully');

        await startQueueManager();
        console.log('Queue Manager started successfully');
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(`Error starting server: ${error.message}`);
        process.exit(1);
    }
};

startServer();
