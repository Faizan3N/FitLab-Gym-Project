// Import necessary modules
const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// ✅ Route: Create a new subscription
// URL: POST /api/subscriptions
router.post('/api/subscriptions', async (req, res) => {
  try {
    // Create new subscription document from request body
    const subscription = new Subscription(req.body);

    // Save to MongoDB
    await subscription.save();

    // Respond with success and saved data
    res.status(201).json({
      success: true,
      message: 'Subscription created successfully',
      data: subscription
    });
  } catch (error) {
    // Handle server/database errors
    res.status(500).json({
      success: false,
      message: 'Error creating subscription',
      error: error.message
    });
  }
});

// Export the router so it can be used in index.js
module.exports = router;
