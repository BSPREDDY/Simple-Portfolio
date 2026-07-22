const express = require('express');
const router = express.Router();
const { getPortfolioData, handleContactForm } = require('../controllers/portfolioController');
const mongoose = require('mongoose');

// Health Check Endpoint
// By the time this runs, the /api middleware in index.js has already awaited connectDB()
router.get('/health', (req, res) => {
  const state = mongoose.connection.readyState;
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  const stateMap = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
  res.json({
    status: 'online',
    timestamp: new Date(),
    dbConnected: state === 1,
    dbState: stateMap[state] || 'unknown',
    mongoUri: process.env.MONGODB_URI ? '✅ env var set' : '❌ env var MISSING',
  });
});

// Portfolio Data Endpoint
router.get('/portfolio', getPortfolioData);

// Contact Submission Endpoint
router.post('/contact', handleContactForm);

module.exports = router;
