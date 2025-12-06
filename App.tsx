import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ExclusiveProjectCta } from './components/ExclusiveProjectCta';
import { ComparisonSlider } from './components/ComparisonSlider';
import { ProtectionEngineering } from './components/ProtectionEngineering';
import { Portfolio } from './components/Portfolio';
import { AuthorityStrip } from './components/AuthorityStrip';
import { GoogleReviews } from './components/GoogleReviews';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ExclusiveProjectCta />
        <ComparisonSlider />
        <ProtectionEngineering />
        <Portfolio />
        <AuthorityStrip />
        <GoogleReviews />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;