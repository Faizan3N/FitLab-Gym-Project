import React, { useState } from 'react';
import './style.css';

function WorkoutPlanModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    memberId: '',
    trainerId: '',
    exerciseList: '',
    duration: '',
    goal: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:6161/api/workout-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Workout plan created successfully!');
        onClose();
      } else {
        const data = await response.json();
        alert(data.message || 'Error creating workout plan');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating workout plan');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!show) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal-content active">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">Create Workout Plan</h2>
          <p className="modal-subtitle">Design a personalized workout plan</p>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="memberId" className="form-label">Member ID</label>
              <input
                type="text"
                id="memberId"
                name="memberId"
                className="form-input"
                placeholder="Enter member ID"
                value={formData.memberId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="trainerId" className="form-label">Trainer ID</label>
              <input
                type="text"
                id="trainerId"
                name="trainerId"
                className="form-input"
                placeholder="Enter trainer ID"
                value={formData.trainerId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="exerciseList" className="form-label">Exercise List</label>
              <textarea
                id="exerciseList"
                name="exerciseList"
                className="form-input"
                placeholder="Enter exercises (one per line)"
                value={formData.exerciseList}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration" className="form-label">Duration (weeks)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                className="form-input"
                placeholder="Enter duration in weeks"
                min="1"
                max="52"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="goal" className="form-label">Fitness Goal</label>
              <select
                id="goal"
                name="goal"
                className="form-input"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="">Select goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="strength">Strength Training</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
                <option value="general-fitness">General Fitness</option>
              </select>
            </div>

            <button type="submit" className="form-submit">
              Create Plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlanModal; 