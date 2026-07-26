const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: [true, 'Member ID is required'],
    trim: true
  },
  checkInTime: {
    type: Date,
    required: [true, 'Check-in time is required']
  },
  checkOutTime: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add indexes for better query performance
attendanceSchema.index({ memberId: 1, checkInTime: -1 });

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance; 