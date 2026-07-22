const express = require('express');
const router = express.Router();
const { getPortfolioData, handleContactForm } = require('../controllers/portfolioController');
const mongoose = require('mongoose');

// Health Check Endpoint — uses mongoose readyState for accurate live status
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    dbConnected: mongoose.connection.readyState === 1,
  });
});

// Portfolio Data Endpoint
router.get('/portfolio', getPortfolioData);

// Contact Submission Endpoint
router.post('/contact', handleContactForm);

module.exports = router;
