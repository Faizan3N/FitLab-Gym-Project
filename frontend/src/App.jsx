import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';
import Pricing from './Pricing';

import SignupModal from './SignupModal';
import AttendanceModal from './AttendanceModal';
import TrainerRegistrationModal from './TrainerRegistrationModal';
import WorkoutPlanModal from './WorkoutPlanModal';
import SubscriptionModal from './SubscriptionModal';

import './style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Welcome />
              <About />
              <Pricing />
            </>
          }></Route>

          <Route path="/registration" element={<SignupModal />}></Route>
          <Route path="/attendance" element={<AttendanceModal />}></Route>
          <Route path="/trainer" element={<TrainerRegistrationModal />}></Route>
          <Route path="/workout-plan" element={<WorkoutPlanModal />}></Route>
          <Route path="/subscription" element={<SubscriptionModal />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
