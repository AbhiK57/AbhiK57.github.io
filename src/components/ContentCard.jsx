import React from 'react';
import { motion } from 'framer-motion';

const ContentCard = ({ title, date, link }) => (
  <motion.a
    href={link}
    className="block p-4 -mx-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
    whileHover={{ x: 5 }}
  >
    <h3 className="text-lg font-medium text-gray-200 group-hover:text-teal-400">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{date}</p>
  </motion.a>
);

export default ContentCard;