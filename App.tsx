
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Coverage from './components/Coverage';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="sobre">
          <About />
        </section>

        <section id="frota">
          <Fleet />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="cobertura">
          <Coverage />
        </section>

        <section id="depoimentos">
          <Testimonials />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
