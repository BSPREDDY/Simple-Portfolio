const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/surya_portfolio';
    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`MongoDB Connected successfully to: ${mongoose.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`MongoDB Connection Notice: ${error.message}`);
    console.warn('Backend will serve structured fallback data for portfolio endpoints.');
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
