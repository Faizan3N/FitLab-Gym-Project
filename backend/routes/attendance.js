const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');


router.post('/api/attendance', async (req, res) => {
  try {
    const { memberId, checkInTime, checkOutTime } = req.body;

    // Validate required field
    if (!memberId) {
      return res.status(400).json({ message: 'Member ID is required' });
    }

    const attendance = new Attendance({
      memberId,
      checkInTime: new Date(checkInTime),
      checkOutTime: checkOutTime ? new Date(checkOutTime) : null
    });

    const savedAttendance = await attendance.save();

    res.status(201).json({
      success: true,
      message: 'Attendance recorded successfully',
      data: savedAttendance
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error recording attendance',
      error: error.message
    });
  }
});

module.exports = router;
