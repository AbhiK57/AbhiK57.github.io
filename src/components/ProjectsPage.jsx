import React from "react";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation.jsx";
import "../index.css"; // Assuming shared styles like fonts might be here

const ProjectsPage = ({ onNavigateBack }) => {
  return (
    <div className="w-full bg-black h-screen relative overflow-hidden">
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        <TypingAnimation text="Projects" />
        <button
          onClick={onNavigateBack}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors duration-300 max-w-max"
        >
          Back
        </button>
        {/* You can add the rest of your project content here later */}
      </div>
      {/* Other project elements go here */}
    </div>
  );
};

export default ProjectsPage; 