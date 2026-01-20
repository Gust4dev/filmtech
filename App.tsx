import React, { useState, useEffect, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LicenseLock } from "./components/LicenseLock";

// Lazy Load components below the fold
const ComparisonSlider = React.lazy(() =>
  import("./components/ComparisonSlider").then((module) => ({
    default: module.ComparisonSlider,
  })),
);
const Portfolio = React.lazy(() =>
  import("./components/Portfolio").then((module) => ({
    default: module.Portfolio,
  })),
);
const ExclusiveProjectCta = React.lazy(() =>
  import("./components/ExclusiveProjectCta").then((module) => ({
    default: module.ExclusiveProjectCta,
  })),
);
const ProtectionEngineering = React.lazy(() =>
  import("./components/ProtectionEngineering").then((module) => ({
    default: module.ProtectionEngineering,
  })),
);
const AuthorityStrip = React.lazy(() =>
  import("./components/AuthorityStrip").then((module) => ({
    default: module.AuthorityStrip,
  })),
);
const GoogleReviews = React.lazy(() =>
  import("./components/GoogleReviews").then((module) => ({
    default: module.GoogleReviews,
  })),
);
const Footer = React.lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer })),
);

const LoadingFallback = () => (
  <div className="w-full h-96 flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const IS_LOCKED = true; // Defina como true para ativar a tela de travamento

const App: React.FC = () => {
  useEffect(() => {
    // Disable default browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top on mount/refresh
    window.scrollTo(0, 0);
  }, []);

  if (IS_LOCKED) {
    return <LicenseLock />;
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />

        <Suspense fallback={<LoadingFallback />}>
          <ComparisonSlider />
          <Portfolio />
          <ExclusiveProjectCta />
          <ProtectionEngineering />
          <AuthorityStrip />
          <GoogleReviews />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Analytics />
    </div>
  );
};

export default App;
