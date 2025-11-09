import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Scorecard from './components/Scorecard';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0D17] text-[#F8FAFC] antialiased font-inter relative">
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

      <Hero />
      <Explainer />
      <Scorecard />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
