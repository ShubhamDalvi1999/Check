import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background dark:bg-gray-900 shadow-md h-[180px]">
      <div className="w-full py-4 flex justify-between items-center px-16">
        <div className="flex items-center space-x-4">
          <div className="h-[160px] w-[160px] relative">
            <img 
              src="./icons/profile-photo.jpg" 
              alt="Profile Photo" 
              className="h-full w-full object-cover rounded-full shadow-md"
            />
          </div>
          <h1 className="text-4xl font-bold text-primary dark:text-white">Shubham Dalvi</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="text-2xl hover:text-accent dark:text-white dark:hover:text-accent">Home</a></li>
            <li><a href="#data-collection" className="text-2xl hover:text-accent dark:text-white dark:hover:text-accent">Projects</a></li>
            <li><a href="#tools-and-skills" className="text-2xl hover:text-accent dark:text-white dark:hover:text-accent">Skills</a></li>
            <li><a href="#contact" className="text-2xl hover:text-accent dark:text-white dark:hover:text-accent">Contact</a></li>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun className="w-8 h-8 text-white" /> : <Moon className="w-8 h-8 text-text" />}
        </button>
      </div>
    </header>
  );
};

export default Header;

