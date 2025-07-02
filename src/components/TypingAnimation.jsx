import React, { useState, useContext } from "react";
import { ReactTyped } from "react-typed";
import { ThemeContext } from "../contexts/ThemeContext";

const TypingAnimation = ({ text, className = "" }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`text-6xl text-left ${
        theme === "dark" ? "text-typing-dark" : "text-typing-light"
      } ${className}`}
      style={{ fontFamily: "Helvetica" }}
    >
      {!typingComplete ? (
        <ReactTyped
          strings={[text]}
          typeSpeed={95}
          backSpeed={30}
          loop={false}
          showCursor={true}
          onComplete={() => setTypingComplete(true)}
        />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default TypingAnimation;
