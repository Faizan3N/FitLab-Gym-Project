import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function AttendanceModal({ show, onClose }) {
  const [memberId, setMemberId] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    if (checkOutTime && new Date(checkOutTime) <= new Date(checkInTime)) {
      setError('Check-out time must be after check-in time');
      setIsLoading(false);
      return;
    }

    try {
      const dataToSend = {
        memberId: memberId,
        checkInTime: new Date(checkInTime).toISOString(),
        checkOutTime: checkOutTime ? new Date(checkOutTime).toISOString() : null
      };

      const response = await axios.post('http://localhost:6161/api/attendance', dataToSend);

      if (response.status === 201) {
        setSuccess('Attendance recorded successfully!');
        setMemberId('');
        setCheckInTime('');
        setCheckOutTime('');
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error recording attendance. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal-content active">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2 className="modal-title">Attendance Tracking</h2>
          <p className="modal-subtitle">Record member check-in/check-out</p>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {success && <div className="form-success">{success}</div>}
            {error && <div className="form-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="memberId" className="form-label">Member ID</label>
              <input
                type="text"
                id="memberId"
                className="form-input"
                placeholder="Enter member ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkInTime" className="form-label">Check-in Time</label>
              <input
                type="datetime-local"
                id="checkInTime"
                className="form-input"
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="checkOutTime" className="form-label">Check-out Time</label>
              <input
                type="datetime-local"
                id="checkOutTime"
                className="form-input"
                value={checkOutTime}
                onChange={(e) => setCheckOutTime(e.target.value)}
                min={checkInTime}
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Recording...' : 'Record Attendance'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AttendanceModal;
