import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1400&q=80',
    alt: 'Main training floor'
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    alt: 'Dumbbell strength work'
  },
  {
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    alt: 'Barbell training'
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    alt: 'Selectorised machines'
  },
  {
    src: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=800&q=80',
    alt: 'Club interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1000&q=80',
    alt: 'Deadlift platform'
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    alt: 'Cardio gallery'
  },
  {
    src: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&w=800&q=80',
    alt: 'Conditioning session'
  },
  {
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
    alt: 'Evening session'
  },
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    alt: 'Coached strength work'
  },
  {
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
    alt: 'Free-weight bay'
  },
  {
    src: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80',
    alt: 'Cable station'
  }
];

function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-intro">
          <p className="eyebrow">The House</p>
          <h2 className="section-heading">A composed training environment.</h2>
          <p className="section-lead">
            Strength floor, cardio gallery, studios, and recovery — photographed as members find them.
          </p>
        </div>
        <div className="gallery-grid">
          {images.map((img) => (
            <figure key={img.alt} className="gallery-item">
              <img src={img.src} alt={img.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
