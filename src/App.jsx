import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Scorecard from './components/Scorecard';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0D17] text-[#F8FAFC] antialiased font-inter">
      {/* Subtle global background depth so the page isn’t pure black */}
      <div
        className="pointer-events-none fixed inset-0 -z-0 opacity-90"
        aria-hidden
      >
        {/* Large radial glow from center to add visible color */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_20%,rgba(0,232,255,0.18),rgba(26,34,56,0.6)_40%,rgba(11,13,23,1)_70%)]" />
        {/* Vertical navy sweep to show brand blues across the canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A2238]/30 to-[#0B0D17]" />
      </div>

      <Hero />
      <Explainer />
      <Scorecard />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
