import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background image (replace URL with your preferred image) */}
      <img 
        className="w-full h-full object-cover"
        src="https://pbs.twimg.com/media/F-bBbuba4AABZyV?format=jpg&name=4096x4096" 
        alt="Projects background"
      />
      {/* Overlay to darken or style if needed */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/25"></div>
      {/* Centered animated text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <motion.h2
          className="text-white text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Some Projects I worked on
        </motion.h2>
      </div>
    </section>
  );
};

export default ProjectsSection;
