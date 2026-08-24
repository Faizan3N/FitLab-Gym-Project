import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
            alt="FitLab strength training floor"
          />
          <div className="about-badge">
            <strong>6 years</strong>
            <span>serving Lahore athletes</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="eyebrow">The Club</p>
          <h2 className="section-heading">A private training house, not a crowded gym.</h2>
          <p className="lede">
            FitLab was founded for people who treat training as a professional habit — executives,
            athletes, and members who expect order, hygiene, and coaching of a higher standard.
          </p>
          <p>
            Our floor is programmed, not packed. Equipment is commercial-grade and maintained daily.
            Coaches work from assessments, not guesswork. Whether the goal is strength, physique,
            or longevity, the method is the same: structured training in a composed environment.
          </p>

          <ul className="about-points">
            <li>Member capacity is limited to protect floor quality</li>
            <li>Daily sanitisation of stations, studios, and changing rooms</li>
            <li>Certified coaches for strength, conditioning, and mobility</li>
            <li>Complimentary fitness assessment with every new membership</li>
          </ul>

          <Link to="/registration" className="btn btn-gold">Begin Membership</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
