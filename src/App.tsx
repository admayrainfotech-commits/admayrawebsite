import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;