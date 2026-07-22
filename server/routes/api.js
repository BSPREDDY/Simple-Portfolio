const express = require('express');
const router = express.Router();
const { getPortfolioData, handleContactForm } = require('../controllers/portfolioController');
const { getDBStatus } = require('../config/db');

// Health Check Endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    dbConnected: getDBStatus(),
  });
});

// Portfolio Data Endpoint
router.get('/portfolio', getPortfolioData);

// Contact Submission Endpoint
router.post('/contact', handleContactForm);

module.exports = router;
