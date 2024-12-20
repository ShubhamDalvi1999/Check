import React from 'react';
import BackgroundImage from './BackgroundImage';

const Hero: React.FC = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-48">
      <BackgroundImage imageSrc={`${basePath}images/hero-bg.jpg`} translateY={[-20, 20]} />
      <div className="w-full relative z-10 px-16">
        <div className="flex items-center justify-center space-x-8">
          <div className="h-[900px] w-[750px] relative">
            <img 
              src={`${basePath}icons/napkin-selection.png`}
              alt="Napkin" 
              className="h-full w-full object-cover rounded-lg transform -rotate-12 shadow-lg"
            />
          </div>
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary dark:text-white mb-4">
              Shubham Dalvi
            </h1>
            <p className="text-3xl md:text-4xl text-text dark:text-gray-300">
              End-to-End Data Engineering Specialist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

