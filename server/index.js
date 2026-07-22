require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── KEY FIX: Await DB connection before processing any /api request ──────────
// In Vercel serverless, each cold-start invocation must await the connection
// before handling the request. Without this, the handler responds before
// mongoose.connect() finishes — causing dbConnected: false.
app.use('/api', async (req, res, next) => {
  try {
    await connectDB();
  } catch (err) {
    // Log but don't block — fallback data will be served
    console.warn('DB middleware error:', err.message);
  }
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Serve static assets (images, PDFs)
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Serve Client in production build mode if client/dist exists
const clientDistPath = path.join(__dirname, '../client/dist');
if (require('fs').existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`================================================`);
  console.log(`🚀 Portfolio Server running on port ${PORT}`);
  console.log(`🌐 API: http://localhost:${PORT}/api/portfolio`);
  console.log(`================================================`);
});

module.exports = app;
