import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PricingCalculator from './components/PricingCalculator';
import BookingWidget from './components/BookingWidget';
import ServiceAreas from './components/ServiceAreas';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <PricingCalculator />
          <BookingWidget />
          <ServiceAreas />
          <Contact />
          <FAQ />
        </main>
        <Footer />
        <LiveChat />
      </div>
    </ThemeProvider>
  );
}

export default App;