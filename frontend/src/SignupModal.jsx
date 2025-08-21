import React, { useState } from "react";
import axios from 'axios';
import './style.css';

function SignupModal() {
    // State variables to hold user input
    const [name, setName] = useState('');  // State to store the user's name
    const [email, setEmail] = useState('');  // State to store the user's email
    const [password, setPassword] = useState('');  // State to store the user's password
    const [confirmPassword, setConfirmPassword] = useState('');  // State to store the password confirmation
    const [memberId, setMemberId] = useState('');  // State to store custom member ID
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [useCustomId, setUseCustomId] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (useCustomId && (!memberId || memberId.length < 3)) {
            setError('Please enter a valid Member ID (minimum 3 characters)');
            return;
        }

        setIsLoading(true);
        setError('');
        setSuccess('');

        // Prepare registration data
        const userData = {
            name: name.trim(),
            email: email.trim(),
            password,
            ...(useCustomId && { memberId: memberId.trim() })
        };

        // Updated API endpoint and added headers
        axios.post('http://localhost:6161/api/register', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('Registration response:', response.data); // Debug log
            if (response.status === 200 || response.status === 201) {
                // Try to get member ID from different possible response structures
                const assignedMemberId = 
                    response.data.memberId || 
                    response.data.user?.memberId || 
                    response.data.id ||
                    response.data.user?.id ||
                    'Generated automatically';

                setSuccess(
                    `Registration successful! ${
                        assignedMemberId !== 'Generated automatically' 
                            ? `Your Member ID is: ${assignedMemberId}`
                            : 'Your Member ID will be provided by the gym staff'
                    }`
                );

                // Clear form
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setMemberId('');
                setUseCustomId(false);
            }
        })
        .catch(err => {
            console.error('Registration error:', err.response || err);
            if (err.response) {
                // Server responded with an error
                if (err.response.status === 400) {
                    setError(err.response.data.message || 'Invalid registration data. Please check your inputs.');
                } else if (err.response.status === 409) {
                    setError('Email already exists. Please use a different email.');
                } else {
                    setError(err.response.data.message || 'Registration failed. Please try again.');
                }
            } else if (err.request) {
                // Request was made but no response
                setError('Unable to connect to the server. Please check your internet connection.');
            } else {
                setError('Error during registration. Please try again.');
            }
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            {success && (
                <div className="form-success">
                    {success}
                </div>
            )}

            <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="form-input"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength="6"
                />
            </div>

            <div className="checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={useCustomId}
                        onChange={(e) => setUseCustomId(e.target.checked)}
                    />
                    Use custom Member ID
                </label>
            </div>

            {useCustomId && (
                <div className="form-group">
                    <label className="form-label" htmlFor="memberId">Custom Member ID</label>
                    <input
                        type="text"
                        id="memberId"
                        className="form-input"
                        placeholder="Enter custom member ID"
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                        minLength="3"
                    />
                    <small className="form-hint">Minimum 3 characters</small>
                </div>
            )}

            {error && (
                <div className="form-error">
                    {error}
                </div>
            )}

            <button 
                type="submit" 
                className="form-submit"
                disabled={isLoading}
            >
                {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="form-footer">
                <p>Already have an account? <a href="#login">Log in</a></p>
            </div>
        </form>
    );
}

export default SignupModal;
