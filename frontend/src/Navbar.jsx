import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import AttendanceModal from './AttendanceModal';
import TrainerRegistrationModal from './TrainerRegistrationModal';
import WorkoutPlanModal from './WorkoutPlanModal';
import SubscriptionModal from './SubscriptionModal';

const NAV_LINKS = [
  { id: 'about', label: 'Club' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'classes', label: 'Classes' },
  { id: 'trainers', label: 'Coaches' },
  { id: 'pricing', label: 'Membership' },
  { id: 'contact', label: 'Visit' }
];

function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const portalRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setPortalOpen(false);

    switch (location.pathname) {
      case '/registration':
        setShowAuthModal(true);
        break;
      case '/attendance':
        setShowAttendanceModal(true);
        break;
      case '/trainer':
        setShowTrainerModal(true);
        break;
      case '/workout-plan':
        setShowWorkoutModal(true);
        break;
      case '/subscription':
        setShowSubscriptionModal(true);
        break;
      default:
        setShowAuthModal(false);
        setShowAttendanceModal(false);
        setShowTrainerModal(false);
        setShowWorkoutModal(false);
        setShowSubscriptionModal(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (portalRef.current && !portalRef.current.contains(e.target)) {
        setPortalOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const modalOpen =
    showAuthModal ||
    showAttendanceModal ||
    showTrainerModal ||
    showWorkoutModal ||
    showSubscriptionModal;

  useEffect(() => {
    document.body.style.overflow = modalOpen || isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen, isMobileMenuOpen]);

  const goToSection = (id) => {
    setIsMobileMenuOpen(false);
    setPortalOpen(false);
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  const closePortal = () => navigate('/');

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Weekdays 06:00 – 22:00</span>
          <span className="topbar-dot">·</span>
          <span>Weekends 08:00 – 20:00</span>
          <span className="topbar-dot">·</span>
          <span>DHA Phase 5, Lahore</span>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-wrapper">
            <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="logo-mark">FL</span>
              <span className="logo-brand">
                FIT<span className="logo-accent">LAB</span>
                <small>Athletic Club</small>
              </span>
            </Link>

            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-content ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="nav-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button type="button" className="nav-link" onClick={() => goToSection(link.id)}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="nav-auth">
                <div className="portal-wrap" ref={portalRef}>
                  <button
                    type="button"
                    className={`nav-btn ghost ${portalOpen ? 'open' : ''}`}
                    onClick={() => setPortalOpen((v) => !v)}
                  >
                    Member Access
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </button>
                  {portalOpen && (
                    <div className="portal-menu">
                      <Link to="/registration" onClick={() => setPortalOpen(false)}>Login / Registration</Link>
                      <Link to="/attendance" onClick={() => setPortalOpen(false)}>Attendance</Link>
                      <Link to="/trainer" onClick={() => setPortalOpen(false)}>Coach Registration</Link>
                      <Link to="/workout-plan" onClick={() => setPortalOpen(false)}>Workout Plans</Link>
                      <Link to="/subscription" onClick={() => setPortalOpen(false)}>Subscriptions</Link>
                    </div>
                  )}
                </div>
                <Link to="/registration" className="nav-btn solid">Join the Club</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AuthModal show={showAuthModal} onClose={closePortal} />
      <AttendanceModal show={showAttendanceModal} onClose={closePortal} />
      <TrainerRegistrationModal show={showTrainerModal} onClose={closePortal} />
      <WorkoutPlanModal show={showWorkoutModal} onClose={closePortal} />
      <SubscriptionModal show={showSubscriptionModal} onClose={closePortal} />
    </>
  );
}

export default Navbar;
