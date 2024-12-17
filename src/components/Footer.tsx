import React from 'react';
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Shubham Dalvi. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/shubhamdalvi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/shubhamdalvi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <GitHub className="w-5 h-5" />
            </a>
            <a href="mailto:shubham.dalvi@example.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

