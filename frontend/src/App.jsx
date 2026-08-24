import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';
import Facilities from './Facilities';
import Classes from './Classes';
import Trainers from './Trainers';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';

import './style.css';

function HomePage() {
  return (
    <main>
      <Welcome />
      <About />
      <Facilities />
      <Classes />
      <Trainers />
      <Pricing />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<HomePage />} />
          <Route path="/attendance" element={<HomePage />} />
          <Route path="/trainer" element={<HomePage />} />
          <Route path="/workout-plan" element={<HomePage />} />
          <Route path="/subscription" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
