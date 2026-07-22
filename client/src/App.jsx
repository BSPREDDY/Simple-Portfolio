import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/portfolio');
        if (response.data && response.data.data) {
          setPortfolioData(response.data.data);
        }
      } catch (error) {
        console.warn('API connection notice:', error.message);
        // App still renders with fallback data built into each component
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'qualification', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <p className="loading-text">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} />
      <main>
        <Hero data={portfolioData?.hero} />
        <About data={portfolioData?.about} />
        <Qualification data={portfolioData?.qualifications} />
        <Services data={portfolioData?.services} />
        <Projects data={portfolioData?.projects} />
        <Contact />
      </main>
      <Footer socialLinks={portfolioData?.hero?.socialLinks} />
    </div>
  );
}

export default App;
