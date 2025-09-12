import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import GetQuotation from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <GetQuotation />
      <Footer />
    </div>
  );
}

export default App;