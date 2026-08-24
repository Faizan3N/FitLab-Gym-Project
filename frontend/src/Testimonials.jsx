import React from 'react';

const quotes = [
  {
    name: 'Omar Farooq',
    title: 'Member since 2021',
    text: 'The floor is never chaotic. Equipment is where it should be, coaches are present, and I leave having trained — not waited. That is why I stay.'
  },
  {
    name: 'Nadia Sheikh',
    title: 'Premium member',
    text: 'I joined for the hours and stayed for the coaching. My programme is reviewed monthly. FitLab treats membership as a professional relationship.'
  },
  {
    name: 'Bilal Hussain',
    title: 'Elite member',
    text: 'Changing rooms, programming, and the way staff address members all feel like a private club. It is the first gym I have been willing to recommend.'
  }
];

function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Members</p>
          <h2 className="section-heading">Held to a standard, not a slogan.</h2>
        </div>
        <div className="testimonial-grid">
          {quotes.map((item) => (
            <blockquote key={item.name} className="testimonial-card">
              <p>“{item.text}”</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
