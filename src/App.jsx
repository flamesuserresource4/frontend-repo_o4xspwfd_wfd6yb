import { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Scorecard from './components/Scorecard';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);
  // Global mouse-follow glow values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const flash = useMotionTemplate`radial-gradient(240px 240px at ${mouseX}px ${mouseY}px, rgba(0,232,255,0.35), rgba(124,244,224,0.28) 35%, rgba(196,78,255,0.18) 55%, transparent 70%)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0B0D17] text-[#F8FAFC] antialiased font-inter relative"
    >
      {/* Global vibrant background washes */}
      <div className="pointer-events-none fixed inset-0 opacity-95" aria-hidden>
        {/* Cyan core glow */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_10%,rgba(0,232,255,0.16),transparent_60%)]" />
        {/* Deep violet aura */}
        <div className="absolute inset-0 bg-[radial-gradient(1400px_900px_at_10%_30%,rgba(124,58,237,0.22),transparent_65%)]" />
        {/* Magenta sweep */}
        <div className="absolute inset-0 bg-[radial-gradient(1100px_800px_at_90%_20%,rgba(236,72,153,0.20),transparent_65%)]" />
        {/* Navy depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111522]/50 to-[#0B0D17]" />
      </div>

      {/* Site-wide mouse-follow glow */}
      <motion.div
        className="pointer-events-none fixed inset-0"
        style={{ backgroundImage: flash }}
        aria-hidden
      />

      <Hero />
      <Explainer />
      <Scorecard />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
