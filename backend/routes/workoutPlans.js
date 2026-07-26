const express = require('express');
const router = express.Router();
const WorkoutPlan = require('../models/WorkoutPlan');

// ✅ Route: Create a new workout plan
// URL: POST /api/workout-plans
router.post('/api/workout-plans', async (req, res) => {
  try {
    const { memberId, trainerId, exerciseList, duration, goal } = req.body;

    // Create and save the workout plan
    const workoutPlan = new WorkoutPlan({
      memberId,
      trainerId,
      exerciseList,
      duration,
      goal
    });

    await workoutPlan.save();

    res.status(201).json({
      success: true,
      message: 'Workout plan created successfully',
      data: workoutPlan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating workout plan',
      error: error.message
    });
  }
});

module.exports = router;
