const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/forum', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully to MongoDB');
    } catch (error) {
        console.error('Error in connecting MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;