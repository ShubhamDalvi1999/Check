import React from 'react';
import { GitlabIcon as GitHub, Linkedin, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="parallax-layer ripple-effect" data-speed="-0.1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20"></div>
      </div>
      <div className="parallax-layer" data-speed="0.1">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary dark:text-white animate-text">Shubham Dalvi</h1>
          <p className="text-xl md:text-2xl mb-8 text-text dark:text-gray-300 animate-text">End-to-End Data Engineering Specialist | Turning Raw Data into Actionable Insights</p>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/shubhamdalvi" target="_blank" rel="noopener noreferrer" className="btn bg-accent text-white hover:bg-accent-dark animate-fade-in-up">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/shubhamdalvi" target="_blank" rel="noopener noreferrer" className="btn bg-primary text-white hover:bg-primary-dark animate-fade-in-up">
              <GitHub className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary-dark animate-fade-in-up">
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

