import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import AttendanceModal from './AttendanceModal';
import TrainerRegistrationModal from './TrainerRegistrationModal';
import WorkoutPlanModal from './WorkoutPlanModal';
import SubscriptionModal from './SubscriptionModal';
import fitlabLogo from './assets/fitlab-logo.svg';
import './style.css';

function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showTrainerModal, setShowTrainerModal] = useState(false);
  const [showWorkoutModal, setShowWorkoutModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    // Show appropriate modal based on route
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
        // Close all modals when on home page
        setShowAuthModal(false);
        setShowAttendanceModal(false);
        setShowTrainerModal(false);
        setShowWorkoutModal(false);
        setShowSubscriptionModal(false);
    }
  }, [location.pathname]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="nav-wrapper">
            <Link to="/" className="logo">
              <img src={fitlabLogo} alt="FitLab Gym" className="logo-img" />
              <h1>FITLAB GYM</h1>
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
                <li>
                  <a 
                    href="#home" 
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const homeSection = document.getElementById('home');
                      if (homeSection) {
                        homeSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      // Close mobile menu if open
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Home
                  </a>
                </li>
                <li><a href="#about" className="nav-link">About</a></li>
              </ul>
              <div className="nav-auth">
                <Link to="/registration" className="register-btn">
                  Registration
                </Link>
                <Link to="/attendance" className="register-btn attendance-btn">
                  Attendance
                </Link>
                <Link to="/trainer" className="register-btn trainer-btn">
                  Trainer
                </Link>
                <Link to="/workout-plan" className="register-btn workout-btn">
                  Workout Plan
                </Link>
                <Link to="/subscription" className="register-btn subscription-btn">
                  Subscription
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AuthModal show={showAuthModal} onClose={() => navigate('/')} />
      <AttendanceModal show={showAttendanceModal} onClose={() => navigate('/')} />
      <TrainerRegistrationModal show={showTrainerModal} onClose={() => navigate('/')} />
      <WorkoutPlanModal show={showWorkoutModal} onClose={() => navigate('/')} />
      <SubscriptionModal show={showSubscriptionModal} onClose={() => navigate('/')} />
    </>
  );
}

export default Navbar;
