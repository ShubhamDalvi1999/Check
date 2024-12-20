import React from 'react';
import BackgroundImage from './BackgroundImage';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <BackgroundImage imageSrc="../images/hero-bg.jpg" translateY={[-20, 20]} />
      <div className="w-full relative z-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="relative aspect-[4/3] w-full">
              <img 
                src="../icons/napkin-selection.png"
                alt="Napkin" 
                className="w-full h-full object-contain rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-lg"
              />
            </div>
          </div>
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-4">
              Shubham Dalvi
            </h1>
            <p className="text-xl md:text-2xl text-text dark:text-gray-300">
              End-to-End Data Engineering Specialist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

