import React, { useContext } from 'react';
import { Rss, Code, BookOpen, GitBranch, User, Sun, Moon, Github } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';
import resumePdf from '../assets/AbhiK_UIUC_CS26.pdf';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className=" ${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-yellow-50 text-gray-900'} py-4 px-4 sm:px-8 border-b border-gray-700 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center">
              <Code className="w-5 h-5 text-teal-400" />
            </div>
            <span className="text-xl font-bold ${theme === 'dark' ? text-white : text-black}">Abhinav Khanduja</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="https://www.linkedin.com/in/abhi-khanduja/" className="hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"><Rss size={18} /><span>Linkedin</span></a>
          <a href={resumePdf} className="hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"><BookOpen size={18} /><span>Resume</span></a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"><GitBranch size={18} /><span>Projects</span></a>
          <a href="#" className="hover:text-teal-400 transition-colors duration-200 flex items-center space-x-2"><User size={18} /><span>About</span></a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Github Profile" className="hover:text-teal-400 transition-colors duration-200">
            <Github size={22} />
          </a>
          <button onClick={toggleTheme} aria-label="Toggle Theme" className="hover:text-teal-400 transition-colors duration-200">
            {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;