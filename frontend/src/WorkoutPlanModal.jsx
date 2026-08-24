import React, { useState } from 'react';

function WorkoutPlanModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    memberId: '',
    trainerId: '',
    exerciseList: '',
    duration: '',
    goal: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:6161/api/workout-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Workout plan created successfully.');
        setFormData({ memberId: '', trainerId: '', exerciseList: '', duration: '', goal: '' });
        setTimeout(onClose, 1500);
      } else {
        const data = await response.json();
        setError(data.message || 'Unable to create the workout plan.');
      }
    } catch (err) {
      setError('Unable to create the workout plan. Please try again.');
    } finally {
      setIsLoading(false);
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
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content active" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">Workout plan</h2>
          <p className="modal-subtitle">Assign a programmed plan to a member.</p>
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
                rows="3"
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

            <button type="submit" className="form-submit" disabled={isLoading}>
              {isLoading ? 'Saving…' : 'Create plan'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlanModal; 