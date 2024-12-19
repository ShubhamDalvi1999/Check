import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact: React.FC = () => {
  return (
    <a 
      href="#contact" 
      className="fixed bottom-8 right-8 z-50 bg-accent hover:bg-accent/90 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-medium">Contact Me</span>
    </a>
  );
};

export default FloatingContact; 