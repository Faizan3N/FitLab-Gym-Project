import React from 'react';

const facilities = [
  {
    title: 'Strength Floor',
    text: 'Olympic platforms, calibrated plates, selectorised machines, and a full free-weight suite from leading commercial brands.',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Cardio Gallery',
    text: 'Treadmills, assault bikes, rowers, and stairmills arranged for focused sessions with climate control and natural light.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Performance Studio',
    text: 'A dedicated space for HIIT, functional circuits, and small-group conditioning with turf, sleds, and battle ropes.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Recovery Suite',
    text: 'Stretching area, foam-roll stations, and quiet rooms for post-session mobility and guided recovery work.',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Changing Rooms',
    text: 'Lockers, rainfall showers, grooming stations, and towel service maintained to hotel standard throughout the day.',
    image: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Members’ Lounge',
    text: 'A composed space for protein, espresso, and conversation — reserved for members before and after training.',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80'
  }
];

function Facilities() {
  return (
    <section id="facilities" className="section facilities-section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">Facilities</p>
          <h2 className="section-heading">Every room has a purpose.</h2>
          <p className="section-lead">
            The club is laid out for uninterrupted training: strength, conditioning, recovery, and
            service areas that meet the standard of a private athletic house.
          </p>
        </div>

        <div className="facility-grid">
          {facilities.map((item) => (
            <article key={item.title} className="facility-card">
              <div className="facility-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="facility-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
