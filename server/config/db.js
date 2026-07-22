const mongoose = require('mongoose');

let cachedPromise = null;

const connectDB = async () => {
  // If already connected, return existing connection
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/surya_portfolio';

  if (!cachedPromise) {
    cachedPromise = mongoose
      .connect(connStr, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
        bufferCommands: false,
      })
      .then((m) => {
        console.log(`MongoDB Connected successfully to: ${m.connection.host}`);
        return m;
      })
      .catch((error) => {
        cachedPromise = null;
        console.warn(`MongoDB Connection Error: ${error.message}`);
        console.warn('Backend will serve structured fallback data for portfolio endpoints.');
        return null;
      });
  }

  await cachedPromise;
  return mongoose.connection;
};

// Use mongoose readyState for accurate live status (1 = connected)
const getDBStatus = () => mongoose.connection.readyState === 1;

module.exports = { connectDB, getDBStatus };
