import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    index: '01',
    name: 'Basic',
    price: '29',
    note: 'Open-floor membership',
    features: [
      'Strength and cardio floors',
      'Locker and changing rooms',
      'Two group classes each month',
      'Complimentary fitness assessment',
      'Members’ lounge access'
    ],
    isPopular: false
  },
  {
    index: '02',
    name: 'Premium',
    price: '59',
    note: 'The club standard',
    features: [
      'Full club access, 06:00–22:00',
      'Unlimited group classes',
      'Two personal training sessions',
      'Nutrition consultation',
      'Priority class booking',
      'One guest pass each month'
    ],
    isPopular: true
  },
  {
    index: '03',
    name: 'Elite',
    price: '99',
    note: 'Private coaching retained',
    features: [
      'All Premium privileges',
      'Four personal training sessions',
      'Monthly body composition review',
      'Custom meal planning',
      'Recovery session credits',
      'Four guest visits each month'
    ],
    isPopular: false
  }
];

function Pricing() {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-intro centered">
          <p className="eyebrow">Membership</p>
          <h2 className="section-heading">Club rates, written plainly.</h2>
          <p className="section-lead">
            Seven-day trial on every plan. Pause or cancel with thirty days’ written notice.
            No joining fee. No hidden levies.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
            >
              {plan.isPopular && <span className="popular-tag">Most selected</span>}
              <header className="pricing-header">
                <span className="plan-index">{plan.index}</span>
                <h3>{plan.name}</h3>
                <p className="plan-note">{plan.note}</p>
              </header>
              <div className="price">
                <span className="currency">USD</span>
                <span className="amount">{plan.price}</span>
                <span className="duration">billed monthly</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                to="/subscription"
                className={`btn ${plan.isPopular ? 'btn-gold' : 'btn-outline'}`}
              >
                Select {plan.name}
              </Link>
            </article>
          ))}
        </div>

        <div className="pricing-assurances">
          <p>Seven-day complimentary trial</p>
          <p>Cancel with 30 days’ notice</p>
          <p>Secure card payment at subscription</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
