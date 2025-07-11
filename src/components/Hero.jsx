import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { ThemeContext } from '../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-[#f5ebdc]'} rounded-2xl p-8 sm:p-12 my-8 sm:my-12`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3">
          <h1 className={`text-4xl sm:text-5xl font-bold leading-tight`}><TypingAnimation text="Hey, I'm Abhi!" /></h1>
          <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm a rising senior at the University of Illinois, and an aspiring Software Engineer. <br></br> As of July 11, this website is still under construction, but I am actively working on it!
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-48 h-48 sm:w-56 sm:h-56"
          >
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;