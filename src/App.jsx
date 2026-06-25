import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import Stats from './components/Stats';
import Experience from './components/Experience';
import WorkProcess from './components/WorkProcess';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Background from './components/Background';
import Preloader from './components/Preloader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Preloader 
            key="preloader" 
            onComplete={handlePreloaderComplete} 
          />
        )}
      </AnimatePresence>

      <div className="app-container" style={{ position: 'relative', zIndex: 1, height: isLoading ? '100vh' : 'auto', overflow: isLoading ? 'hidden' : 'visible' }}>
        <Background />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <BrandTicker />
          <Stats />
          <WorkProcess />
          <Projects />
          <Experience />
          <Tools />
          <Contact />
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
