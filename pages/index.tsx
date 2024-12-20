import React, { useEffect } from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import DataCollection from '../src/components/DataCollection';
import DataWarehousing from '../src/components/DataWarehousing';
import DataVisualization from '../src/components/DataVisualization';
import MachineLearning from '../src/components/MachineLearning';
import ToolsAndSkills from '../src/components/ToolsAndSkills';
import CertificationsAndEducation from '../src/components/CertificationsAndEducation';
import AwardsAndAchievements from '../src/components/AwardsAndAchievements';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import FloatingContact from '../src/components/FloatingContact';
import { initParallax, initTextAnimations, initRippleEffect, handleResize } from '../src/utils/parallax';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);

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
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
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
        <FloatingContact />
      </div>
    </div>
  );
};

export default Home; 