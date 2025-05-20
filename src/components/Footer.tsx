
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white/80 dark:text-slate-300 text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} WeatherVista. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a 
            href="#" 
            className="text-white/80 dark:text-slate-300 hover:text-white dark:hover:text-white text-sm transition-colors"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-white/80 dark:text-slate-300 hover:text-white dark:hover:text-white text-sm transition-colors"
          >
            Contact
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/80 dark:text-slate-300 hover:text-white dark:hover:text-white text-sm transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
