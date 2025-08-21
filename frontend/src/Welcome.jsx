import React from 'react';
import './style.css';

function Welcome() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            TRANSFORM <span>YOUR LIFE</span>
          </h1>
          <p className="hero-text">
            Step into our modern gym in Lahore and begin your journey to a stronger, healthier you. 
            Premium equipment and a motivating community are here to support your goals.
          </p>
          <div className="hero-buttons">
            <a href="#pricing" className="register-btn">Start Your Journey</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">MEMBERS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">CLASSES</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">ACCESS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
