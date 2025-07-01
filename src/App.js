import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlueBox from "./components/BlueBox.jsx";
// import ProjectsSection from "./components/ProjectsSection.jsx"; 
import ProjectsPage from "./components/ProjectsPage.jsx";
import TypingAnimation from "./components/TypingAnimation.jsx";
import subwayCar from "./assets/imgs/subwaycar1.png"; 

const App = () => {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  const handleShowHome = () => {
    setShowProjects(false);
  };

  const pageVariants = {
    initial: {
      x: "-100vw", 
      opacity: 0
    },
    in: {
      x: 0, 
      opacity: 1
    },
    out: {
      x: "100vw", 
      opacity: 0
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const subwayTransition = {
    duration: 0.8,
    ease: [0.4, 0, 0.6, 1] 
  };

  return (
    // Black wrapper for transition background
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Subway animation during transitions */}
      <motion.img
        src={subwayCar}
        alt="Subway Car"
        className="absolute bottom-0 z-10 pointer-events-none" 
        style={{ left: 0 }} 
        initial={false} 
        animate={{ x: showProjects ? "100vw" : "-100vw" }} 
        transition={subwayTransition} 
      />

      <AnimatePresence initial={false} mode='wait'>
        {!showProjects ? (
          <motion.div
            key="bluebox" 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full" 
          >
            <BlueBox onNavigate={handleShowProjects}>
              <TypingAnimation text="Abhinav Khanduja" />
            </BlueBox>
          </motion.div>
        ) : (
          <motion.div
            key="projects" 
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full h-full"
          >
            <ProjectsPage onNavigateBack={handleShowHome} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <ProjectsSection />*/}
    </div>
  );
};

export default App;
