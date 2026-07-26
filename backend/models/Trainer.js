const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  trainerId: {
    type: String,
    required: [true, 'Trainer ID is required'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required'],
    enum: ['strength', 'cardio', 'yoga', 'boxing', 'nutrition']
  },
  experience: {
    type: Number,
    required: [true, 'Experience is required'],
    min: 0,
    max: 50
  },
  contact: {
    type: String,
    required: [true, 'Contact number is required']
  },
  availability: {
    type: String,
    required: [true, 'Availability is required'],
    enum: ['morning', 'afternoon', 'evening', 'fulltime', 'flexible']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trainer', trainerSchema); 