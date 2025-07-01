import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";

// Define variants for the circle animation
const circleVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: { duration: 1.5, ease: [0, 0, 0.58, 1] }
  }
};

const BlueBox = ({ children, onNavigate }) => {
  // State to control the animation variant
  const [controls, setControls] = useState("hidden");

  // Effect to trigger animation after mount
  useEffect(() => {
    // Set controls to 'visible' shortly after mount
    // No delay needed usually, but can add setTimeout if required
    setControls("visible");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="w-full bg-black h-screen relative overflow-hidden">
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        {children}
        <button
          onClick={onNavigate}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300 max-w-max"
        >
          View Projects
        </button>
      </div>
      <motion.div
        variants={circleVariants}
        initial="hidden"      // Start hidden (redundant but clear)
        animate={controls}      // Control animation via state
        className="absolute top-4 right-4 flex flex-col space-y-2"
      >
        <div className="flex space-x-2">
          <div className="blue-circle">U</div>
          <div className="blue-circle">I</div>
          <div className="blue-circle">U</div>
          <div className="blue-circle">C</div>
        </div>
        <div className="flex justify-end space-x-2">
          <div className="orange-circle">N</div>
          <div className="orange-circle">Y</div>
        </div>
      </motion.div>

      {/* Remove the subway car animation from here */}
      {/* 
      <motion.img
        src={subwayCar}
        alt="Subway Car"
        className="absolute bottom-0"
        style={{ right: 0 }}
        initial={{ x: "-100vw"}}
        animate={{ x: "100vw"}}
        transition={{
          duration: 3,
          ease: [.5, .625, 0.75, 1],
        }}
      />
      */}
    </div>

  );
};

export default BlueBox;
