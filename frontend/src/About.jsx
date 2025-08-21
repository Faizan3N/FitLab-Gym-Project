import React from 'react';
import './style.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏋️‍♂️</div>
            <h3>Modern & Clean Facilities</h3>
            <p>Our gym is equipped with spotless interiors, air-conditioned workout areas, and hygienic locker rooms — all designed to keep you comfortable and focused on your goals.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Professional-Grade Equipment</h3>
            <p>We feature the latest strength, cardio, and functional training equipment from leading fitness brands to ensure safety, efficiency, and variety in every workout.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💪</div>
            <h3>Personal Training Options</h3>
            <p>Work one-on-one with certified personal trainers who will design custom programs based on your needs — whether it's weight loss, muscle gain, or improved performance.</p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text text-center">
            <h3>Your Fitness Journey Begins at FitLab</h3>
            <p>At FitLab, we're more than just a gym, we're your partners in health, strength, and transformation. Whether you're a beginner or an experienced athlete, our goal is to help you become the best version of yourself, both physically and mentally.</p>
            <button className="register-btn">START FREE TRIAL</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 