import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2400&q=80"
          alt=""
        />
      </div>
      <div className="hero-overlay" />

      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Private Athletic Club · Lahore · Est. 2019</p>
          <h1 className="hero-title">
            <span className="hero-title-main">The Standard</span>
            <em>of disciplined training</em>
          </h1>
          <p className="hero-text">
            FitLab is a members-only club built for serious results. World-class equipment,
            certified coaches, and a calm, professional environment — without the noise of a
            typical commercial gym.
          </p>
          <div className="hero-buttons">
            <Link to="/registration" className="btn btn-gold">Become a Member</Link>
            <button type="button" className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Book a Club Tour
            </button>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container stats-row">
          <div className="stat-item">
            <span className="stat-number">1,200+</span>
            <span className="stat-label">Active Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">18,000</span>
            <span className="stat-label">Sq. Ft. Training Floor</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">40+</span>
            <span className="stat-label">Weekly Classes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">06–22</span>
            <span className="stat-label">Weekday Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
