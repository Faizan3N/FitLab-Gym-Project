import React, { useState } from 'react';

const ITEMS = [
  {
    q: 'Is FitLab open to the public or members only?',
    a: 'The training floor is reserved for members and accompanied guests. Prospective members may book a complimentary club tour with reception before joining.'
  },
  {
    q: 'Do I need a long-term contract?',
    a: 'No. Memberships run month-to-month after the seven-day trial. Cancellation or pause requires thirty days’ written notice to the membership office.'
  },
  {
    q: 'Are personal trainers included?',
    a: 'Premium includes two coached sessions each month. Elite includes four. Additional sessions may be purchased at the front desk. Basic is open-floor only.'
  },
  {
    q: 'What should I bring on my first visit?',
    a: 'Identification, indoor training shoes, and a towel if you prefer your own. Lockers, showers, and towel service are provided. A staff member will complete your assessment.'
  },
  {
    q: 'Is parking available?',
    a: 'Reserved member parking is adjacent to the club entrance in DHA Phase 5. Evening hours fill quickly; we recommend arriving ten minutes before your session.'
  },
  {
    q: 'Can I freeze my membership?',
    a: 'Yes. Medical and travel freezes of up to eight weeks are available each year. Speak with membership services at least seven days before the freeze begins.'
  }
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div className="section-intro faq-intro">
          <p className="eyebrow">Membership Office</p>
          <h2 className="section-heading">Questions, answered plainly.</h2>
          <p className="section-lead">
            If your enquiry is not listed, write to membership or visit reception during club hours.
          </p>
        </div>
        <div className="faq-list">
          {ITEMS.map((item, index) => (
            <div key={item.q} className={`faq-item ${open === index ? 'open' : ''}`}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{item.q}</span>
                <i>{open === index ? '−' : '+'}</i>
              </button>
              {open === index && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
