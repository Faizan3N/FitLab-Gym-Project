import React from 'react';
import './style.css';

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      duration: 'month',
      features: [
        'Access to gym facilities',
        'Basic equipment usage',
        'Locker room access',
        '2 Group classes per month',
        'Fitness assessment'
      ],
      isPopular: false
    },
    {
      name: 'Premium',
      price: '59',
      duration: 'month',
      features: [
        'Full gym access 24/7',
        'All equipment access',
        'Unlimited group classes',
        'Personal trainer (2 sessions)',
        'Nutrition consultation',
        'Access to mobile app',
        'Free parking'
      ],
      isPopular: true
    },
    {
      name: 'Elite',
      price: '99',
      duration: 'month',
      features: [
        'All Premium features',
        'Personal trainer (4 sessions)',
        'Monthly body analysis',
        'Custom meal plans',
        'Recovery sessions',
        'Bring a friend (4 times/month)',
        'Priority booking'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title">Membership Plans</h2>
        <p className="section-subtitle">
          Choose the perfect plan for your fitness journey
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
            >
              {plan.isPopular && (
                <div className="popular-tag">Most Popular</div>
              )}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="duration">/{plan.duration}</span>
                </div>
              </div>
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`register-btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-note">
          <p>* All plans include a free 7-day trial period</p>
          <p>* No long-term contracts, cancel anytime</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing; 