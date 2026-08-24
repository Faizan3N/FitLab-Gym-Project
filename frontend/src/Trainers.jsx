import React from 'react';
import { Link } from 'react-router-dom';

const coaches = [
  {
    name: 'Ali Malik',
    role: 'Head of Strength',
    creds: 'CSCS · 12 years',
    bio: 'Programs strength and hypertrophy for members who want measurable progress without wasted volume.',
    image: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Omar Shah',
    role: 'Performance Coach',
    creds: 'ASCA L2 · 10 years',
    bio: 'Works with competitive athletes on power, speed, and sport-specific preparation.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Hamza Raza',
    role: 'Mobility Specialist',
    creds: 'NASM CES · 8 years',
    bio: 'Restores range and posture for members returning from injury or long hours at a desk.',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Zain Ahmed',
    role: 'Conditioning Lead',
    creds: 'NASM CPT · 9 years',
    bio: 'Designs metabolic and endurance work for executives who train before the working day begins.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80'
  }
];

function Trainers() {
  return (
    <section id="trainers" className="section trainers-section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Coaching Faculty</p>
          <h2 className="section-heading">Certified coaches. Written programmes.</h2>
          <p className="section-lead">
            Every coach is credentialed, assessed, and held to FitLab’s session standards. Personal
            training is available on Premium and Elite memberships.
          </p>
        </div>

        <div className="trainer-grid">
          {coaches.map((coach) => (
            <article key={coach.name} className="trainer-card">
              <div className="trainer-image">
                <img src={coach.image} alt={coach.name} />
              </div>
              <div className="trainer-body">
                <p className="trainer-role">{coach.role}</p>
                <h3>{coach.name}</h3>
                <p className="trainer-creds">{coach.creds}</p>
                <p>{coach.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/trainer" className="btn btn-outline">Apply as a Coach</Link>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
