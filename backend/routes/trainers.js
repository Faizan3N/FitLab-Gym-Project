const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// ✅ Register a new trainer
router.post('/api/trainers', async (req, res) => {
  try {
    const { trainerId, name, specialization, experience, contact, availability } = req.body;

    // Check if trainer ID already exists
    const existingTrainer = await Trainer.findOne({ trainerId });
    if (existingTrainer) {
      return res.status(400).json({
        success: false,
        message: 'Trainer ID already exists'
      });
    }

    // Save trainer to database
    const trainer = new Trainer({
      trainerId,
      name,
      specialization,
      experience,
      contact,
      availability
    });

    await trainer.save();

    res.status(201).json({
      success: true,
      message: 'Trainer registered successfully',
      data: trainer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error registering trainer',
      error: error.message
    });
  }
});

module.exports = router;
