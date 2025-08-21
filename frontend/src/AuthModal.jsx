import React, { useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import './style.css';

function AuthModal({ show, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  if (!show && !isVisible) return null;

  return (
    <div className={`modal-overlay ${show ? 'active' : ''}`} onClick={onClose}>
      <div 
        className={`modal-content ${show ? 'active' : ''}`} 
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{isLogin ? 'Welcome Back!' : 'Join FitLab'}</h2>
          <p className="modal-subtitle">
            {isLogin 
              ? 'Sign in to access your personalized workout plans' 
              : 'Create an account to start your fitness journey'}
          </p>
        </div>

        <div className="auth-tabs">
          <button 
            className={`auth-tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`auth-tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <div className="modal-body">
        {isLogin ? <LoginModal /> : <SignupModal />}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
