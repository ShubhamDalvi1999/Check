import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary dark:text-white">Shubham Dalvi</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="text-text hover:text-accent dark:text-white dark:hover:text-accent">Home</a></li>
            <li><a href="#data-collection" className="text-text hover:text-accent dark:text-white dark:hover:text-accent">Projects</a></li>
            <li><a href="#tools-and-skills" className="text-text hover:text-accent dark:text-white dark:hover:text-accent">Skills</a></li>
            <li><a href="#contact" className="text-text hover:text-accent dark:text-white dark:hover:text-accent">Contact</a></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-text" />}
        </button>
      </div>
    </header>
  );
};

export default Header;

