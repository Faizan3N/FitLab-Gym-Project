import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'membership', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Visit the Club</p>
          <h2 className="section-heading">Book a tour or speak with membership.</h2>
          <p className="lede">
            Tours are offered daily. A concierge will walk you through the floor, studios, and
            membership options. No obligation.
          </p>

          <ul className="contact-details">
            <li>
              <span>Address</span>
              <strong>DHA Phase 5, Lahore</strong>
            </li>
            <li>
              <span>Email</span>
              <strong><a href="mailto:membership@fitlab.club">membership@fitlab.club</a></strong>
            </li>
            <li>
              <span>Hours</span>
              <strong>Monday–Friday, 06:00 – 22:00</strong>
              <strong>Saturday–Sunday, 08:00 – 20:00</strong>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="form-success">
              Thank you. Membership services will contact you within one working day.
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full name</label>
                  <input
                    id="contact-name"
                    name="name"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">Telephone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-interest">Enquiry</label>
                  <select
                    id="contact-interest"
                    name="interest"
                    className="form-input"
                    value={form.interest}
                    onChange={handleChange}
                  >
                    <option value="membership">New membership</option>
                    <option value="tour">Club tour</option>
                    <option value="corporate">Corporate rates</option>
                    <option value="coaching">Personal coaching</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-gold">Send Enquiry</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
