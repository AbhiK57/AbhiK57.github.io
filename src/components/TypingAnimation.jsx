import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const TypingAnimation = ({ text, className = "" }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div
      className={`text-white text-6xl text-left ${className}`}
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
