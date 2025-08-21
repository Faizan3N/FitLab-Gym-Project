import React, { useState } from "react";
import axios from 'axios';
import './style.css';

function LoginModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const result = await axios.post('http://localhost:6161/login', { email, password });
                if (result.status === 200) {
                setSuccess('Login successful! Redirecting...');
                // Store the token
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('user', JSON.stringify(result.data.user));
                // Clear form
                setEmail('');
                setPassword('');
                // Close modal after 1.5 seconds
                setTimeout(() => {
                    document.querySelector('.modal-close').click();
                    window.location.reload(); // Refresh to update UI
                }, 1500);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            {success && (
                <div className="form-success">
                    {success}
                </div>
            )}

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
                {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="form-footer">
                <p>Don't have an account? <a href="#signup">Sign up</a></p>
                <a href="#forgot-password" className="forgot-password">Forgot your password?</a>
            </div>
            </form>
    );
}

export default LoginModal;
