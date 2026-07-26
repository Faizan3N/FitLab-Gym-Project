import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function SubscriptionModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    memberId: '',
    plan: '',
    paymentMethod: '',
    duration: '1',
    autoRenew: false
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
      const response = await axios.post('http://localhost:6161/api/subscriptions', formData);
      
      if (response.status === 201) {
        setSuccess('Subscription created successfully!');
        setFormData({
          memberId: '',
          plan: '',
          paymentMethod: '',
          duration: '1',
          autoRenew: false
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (err) {
      setError('Error creating subscription. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  if (!show) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal-content active">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">Subscription</h2>
          <p className="modal-subtitle">Choose your membership plan</p>
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
              <label htmlFor="plan" className="form-label">Subscription Plan</label>
              <select
                id="plan"
                name="plan"
                className="form-input"
                value={formData.plan}
                onChange={handleChange}
                required
              >
                <option value="">Select plan</option>
                <option value="basic">Basic ($29/month)</option>
                <option value="premium">Premium ($59/month)</option>
                <option value="elite">Elite ($99/month)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="duration" className="form-label">Duration (months)</label>
              <select
                id="duration"
                name="duration"
                className="form-input"
                value={formData.duration}
                onChange={handleChange}
                required
              >
                <option value="1">1 Month</option>
                <option value="3">3 Months (5% off)</option>
                <option value="6">6 Months (10% off)</option>
                <option value="12">12 Months (15% off)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                className="form-input"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select payment method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
              </select>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="autoRenew"
                  checked={formData.autoRenew}
                  onChange={handleChange}
                />
                <span>Auto-renew subscription</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="form-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Subscription...' : 'Subscribe Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionModal; 