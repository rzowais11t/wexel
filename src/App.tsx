import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Grainient from './components/Grainient';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Lazy load solution components
const AICRM = lazy(() => import('./components/AICRM'));
const VoiceAgent = lazy(() => import('./components/VoiceAgent'));
const Outreach = lazy(() => import('./components/Outreach'));
const Ecommerce = lazy(() => import('./components/Ecommerce'));
const Social = lazy(() => import('./components/Social'));
const Website = lazy(() => import('./components/Website'));



function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if we have a pending scroll target
    const hasPendingScroll = sessionStorage.getItem('pendingScroll');
    
    if (hasPendingScroll) {
      // Don't scroll to top if navigating to a specific section
      return;
    }
    
    // For other route changes, scroll to top after a brief delay to prevent interference
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', overflowX: 'clip' }}>
      <Grainient
        color1="#1322ec"
        color2="#0e1b5d"
        color3="#3048c0"
        timeSpeed={0.55}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <div className="relative w-full" style={{ zIndex: 1 }}>
        <Header onContactClick={() => setIsContactOpen(true)} />
        <main className="w-full" style={{ minHeight: '100dvh' }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/aicrm" element={<Suspense fallback={<div className="h-screen flex items-center justify-center relative z-10"><p className="text-white">Loading...</p></div>}><AICRM onContactClick={() => setIsContactOpen(true)} /></Suspense>} />
            <Route path="/voice" element={<Suspense fallback={<div className="h-screen flex items-center justify-center relative z-10"><p className="text-white">Loading...</p></div>}><VoiceAgent onContactClick={() => setIsContactOpen(true)} /></Suspense>} />
            <Route path="/outreach" element={<Suspense fallback={<div className="h-screen flex items-center justify-center relative z-10"><p className="text-white">Loading...</p></div>}><Outreach onContactClick={() => setIsContactOpen(true)} /></Suspense>} />
            <Route path="/ecommerce" element={<Suspense fallback={<div className="h-screen flex items-center justify-center relative z-10"><p className="text-white">Loading...</p></div>}><Ecommerce onContactClick={() => setIsContactOpen(true)} /></Suspense>} />
            <Route path="/social" element={<Suspense fallback={<div className="h-screen flex items-center justify-center relative z-10"><p className="text-white">Loading...</p></div>}><Social onContactClick={() => setIsContactOpen(true)} /></Suspense>} />
            <Route path="/website" element={<Suspense fallback={<div className="h-screen flex items-center justify-center relative z-10"><p className="text-white">Loading...</p></div>}><Website onContactClick={() => setIsContactOpen(true)} /></Suspense>} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
