import React, { useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

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
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{isLogin ? 'Member login' : 'Join FitLab'}</h2>
          <p className="modal-subtitle">
            {isLogin
              ? 'Sign in to manage attendance, plans, and membership.'
              : 'Create your member record to begin the club process.'}
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
            Register
          </button>
        </div>

        <div className="modal-body">
          {isLogin ? (
            <LoginModal onSwitch={() => setIsLogin(false)} />
          ) : (
            <SignupModal onSwitch={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
