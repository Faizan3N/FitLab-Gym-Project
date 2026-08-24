import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="logo-brand footer-logo">
            FIT<span className="logo-accent">LAB</span>
          </span>
          <p>
            A private athletic club in Lahore. Strength, conditioning, and coaching delivered to a
            professional standard.
          </p>
        </div>

        <div>
          <h4>The Club</h4>
          <ul>
            <li><button type="button" onClick={() => scrollTo('about')}>About</button></li>
            <li><button type="button" onClick={() => scrollTo('facilities')}>Facilities</button></li>
            <li><button type="button" onClick={() => scrollTo('classes')}>Classes</button></li>
            <li><button type="button" onClick={() => scrollTo('trainers')}>Coaches</button></li>
          </ul>
        </div>

        <div>
          <h4>Membership</h4>
          <ul>
            <li><button type="button" onClick={() => scrollTo('pricing')}>Plans &amp; rates</button></li>
            <li><Link to="/registration">Join the club</Link></li>
            <li><Link to="/subscription">Subscriptions</Link></li>
            <li><button type="button" onClick={() => scrollTo('contact')}>Book a tour</button></li>
          </ul>
        </div>

        <div>
          <h4>Reception</h4>
          <ul>
            <li>DHA Phase 5, Lahore</li>
            <li><a href="mailto:membership@fitlab.club">membership@fitlab.club</a></li>
            <li>Weekdays 06:00 – 22:00</li>
            <li>Weekends 08:00 – 20:00</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} FitLab Athletic Club. All rights reserved.</p>
          <p className="footer-credit">
            Designed &amp; developed by{' '}
            <a href="https://github.com/Faizan3N" target="_blank" rel="noreferrer">
              Faizan Ali
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
