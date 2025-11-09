import Hero from './components/Hero';
import Explainer from './components/Explainer';
import Scorecard from './components/Scorecard';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-[#0A0F1F]">
      <Hero />
      <Explainer />
      <Scorecard />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
