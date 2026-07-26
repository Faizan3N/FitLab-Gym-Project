import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function TrainerRegistrationModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    trainerId: '',
    name: '',
    specialization: '',
    experience: '',
    contact: '',
    availability: ''
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
      const response = await axios.post('http://localhost:6161/api/trainers', formData);

      if (response.status === 200) {
        setSuccess(`Trainer registered successfully! Your Trainer ID is: ${formData.trainerId}`);
        // Clear form
        setFormData({
          trainerId: '',
          name: '',
          specialization: '',
          experience: '',
          contact: '',
          availability: ''
        });
        // Close modal after 1.5 seconds
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error registering trainer. Please try again.');
      console.error('Error:', err);
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
    <div className="modal-overlay active">
      <div className="modal-content active">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">Trainer Registration</h2>
          <p className="modal-subtitle">Register as a trainer at FitLab</p>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {success && (
              <div className="form-success">
                {success}
              </div>
            )}

            {error && (
              <div className="form-error">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="trainerId" className="form-label">Trainer ID</label>
              <input
                type="text"
                id="trainerId"
                name="trainerId"
                className="form-input"
                placeholder="Enter your trainer ID"
                value={formData.trainerId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialization" className="form-label">Specialization</label>
              <select
                id="specialization"
                name="specialization"
                className="form-input"
                value={formData.specialization}
                onChange={handleChange}
                required
              >
                <option value="">Select specialization</option>
                <option value="strength">Strength Training</option>
                <option value="cardio">Cardio & HIIT</option>
                <option value="yoga">Yoga & Flexibility</option>
                <option value="nutrition">Nutrition</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience" className="form-label">Experience (years)</label>
              <input
                type="number"
                id="experience"
                name="experience"
                className="form-input"
                placeholder="Years of experience"
                min="0"
                max="50"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact" className="form-label">Contact Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="form-input"
                placeholder="Enter contact number"
                value={formData.contact}
                onChange={handleChange}
                required
                pattern="[0-9]{10,}"
                title="Please enter a valid phone number (minimum 10 digits)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="availability" className="form-label">Availability</label>
              <select
                id="availability"
                name="availability"
                className="form-input"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <option value="">Select availability</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 10 PM)</option>
                <option value="fulltime">Full Time</option>
                <option value="flexible">Flexible Hours</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="form-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Register as Trainer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrainerRegistrationModal; 