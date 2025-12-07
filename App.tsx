import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ComparisonSlider } from './components/ComparisonSlider';
import { Portfolio } from './components/Portfolio';
import { ExclusiveProjectCta } from './components/ExclusiveProjectCta';
import { ProtectionEngineering } from './components/ProtectionEngineering';
import { AuthorityStrip } from './components/AuthorityStrip';
import { GoogleReviews } from './components/GoogleReviews';
import { Footer } from './components/Footer';
const App: React.FC = () => {
  useEffect(() => {
    // Disable default browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top on mount/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ComparisonSlider />
        <Portfolio />
        <ExclusiveProjectCta />
        <ProtectionEngineering />
        <AuthorityStrip />
        <GoogleReviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;