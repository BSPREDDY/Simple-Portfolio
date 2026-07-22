const mongoose = require('mongoose');

// Cache the connection promise so concurrent requests share one connection attempt
let connectionPromise = null;

const connectDB = async () => {
  // Already connected — reuse
  if (mongoose.connection.readyState === 1) {
    return;
  }

  // Connection in progress — share the same promise
  if (connectionPromise) {
    return connectionPromise;
  }

  const connStr =
    process.env.MONGODB_URI ||
    'mongodb://127.0.0.1:27017/surya_portfolio';

  console.log('Connecting to MongoDB...');

  connectionPromise = mongoose
    .connect(connStr, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      bufferCommands: false,
    })
    .then(() => {
      console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
    })
    .catch((err) => {
      console.warn(`⚠️  MongoDB Connection Failed: ${err.message}`);
      connectionPromise = null; // reset so next request can retry
    });

  return connectionPromise;
};

const getDBStatus = () => mongoose.connection.readyState === 1;

module.exports = { connectDB, getDBStatus };
