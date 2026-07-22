const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB already connected.');
    return;
  }
  try {
    const connStr =
      process.env.MONGODB_URI ||
      'mongodb://127.0.0.1:27017/surya_portfolio';

    await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 10000,  // Increased for Vercel cold starts
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      bufferCommands: false,            // Fail fast instead of buffering when offline
    });
    isConnected = true;
    console.log(`MongoDB Connected successfully to: ${mongoose.connection.host}`);
  } catch (error) {
    isConnected = false;
    console.warn(`MongoDB Connection Error: ${error.message}`);
    console.warn('Backend will serve structured fallback data for portfolio endpoints.');
  }
};

// Use mongoose readyState for accurate live status (1 = connected)
const getDBStatus = () => mongoose.connection.readyState === 1;

module.exports = { connectDB, getDBStatus };
