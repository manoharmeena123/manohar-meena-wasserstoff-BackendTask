const mongoose = require('mongoose');
const config = require('./config');

const connection = async () => {
    try {
        await mongoose.connect(config.mongoDB.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = { connection };
