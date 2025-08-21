const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: [true, 'Member ID is required'],
    trim: true
  },
  trainerId: {
    type: String,
    required: [true, 'Trainer ID is required'],
    trim: true
  },
  exerciseList: {
    type: String,
    required: [true, 'Exercise list is required']
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
    min: 1,
    max: 52
  },
  goal: {
    type: String,
    required: [true, 'Fitness goal is required'],
    enum: ['weight-loss', 'muscle-gain', 'strength', 'endurance', 'flexibility', 'general-fitness']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema); 