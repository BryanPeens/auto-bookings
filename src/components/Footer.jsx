import React from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="py-4 text-lg font-semibold">
          Drive with Confidence with AutoBook!
        </p>
        <div className="flex space-x-6 text-3xl mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/bryan-peens-558113204/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/BryanPeens" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-100 transition">
            <FaGithub />
          </a>
          <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition">
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-500 text-sm">
        &copy; 2023 AutoBook. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
