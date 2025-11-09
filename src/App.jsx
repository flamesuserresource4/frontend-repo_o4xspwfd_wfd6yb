import React from 'react';
import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Scorecard from './components/Scorecard';
import Signup from './components/Signup';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D17] text-white">
      <Hero />
      <Explainer />
      <Scorecard />
      <Signup />
      <Footer />
    </div>
  );
}
