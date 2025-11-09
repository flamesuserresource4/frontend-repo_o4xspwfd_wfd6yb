import React from 'react';
import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Scorecard from './components/Scorecard';
import Signup from './components/Signup';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D17] text-white">
      <Hero />
      <Explainer />
      <Scorecard />
      <Signup />
      {/* Simple footer */}
      <footer className="border-t border-white/10 bg-[#0B0D17] py-10 text-center text-white/60">
        <p>Evident © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
