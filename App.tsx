import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ComparisonSlider } from './components/ComparisonSlider';
import { HealthStats } from './components/HealthStats';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ComparisonSlider />
        <HealthStats />
        <Portfolio />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;