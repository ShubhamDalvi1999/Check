import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import DataCollection from './components/DataCollection';
import DataWarehousing from './components/DataWarehousing';
import DataVisualization from './components/DataVisualization';
import MachineLearning from './components/MachineLearning';
import ToolsAndSkills from './components/ToolsAndSkills';
import CertificationsAndEducation from './components/CertificationsAndEducation';
import AwardsAndAchievements from './components/AwardsAndAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initParallax, initTextAnimations, initRippleEffect, handleResize } from './utils/parallax';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    initParallax();
    initTextAnimations();
    initRippleEffect();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-background dark:bg-gray-900 text-text dark:text-white">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="parallax-container">
            <Hero />
            <DataCollection />
            <DataWarehousing />
            <DataVisualization />
            <MachineLearning />
            <ToolsAndSkills />
            <CertificationsAndEducation />
            <AwardsAndAchievements />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default App;

