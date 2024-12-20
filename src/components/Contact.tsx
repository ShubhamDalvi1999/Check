import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Mail, Send } from 'lucide-react';
import BackgroundImage from './BackgroundImage';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden -mt-32">
      <BackgroundImage imageSrc="./images/contact-bg.jpg" translateY={[-30, 30]} />
      <div className="w-full relative z-10 px-16">
        <Parallax translateY={[-100, 100]} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-500 opacity-20"></div>
        </Parallax>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                <Send className="w-4 h-4 inline-block mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

