import React from "react";

const SubwayLines = () => {
  return (
    <svg
      viewBox="0 0 600 600"
      width="100%"
      height="100%"
      style={{ overflow: "visible" }}
    >
      {/* -- Line 1: Sky Blue (angled) -- */}
      <path
        d="M100,100 L250,50 L450,100"
        stroke="#1D9BF0"
        strokeWidth="10"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Stations */}
      <circle cx="100" cy="100" r="7" fill="#FFF" stroke="#1D9BF0" strokeWidth="2" />
      <circle cx="250" cy="50"  r="7" fill="#FFF" stroke="#1D9BF0" strokeWidth="2" />
      <circle cx="450" cy="100" r="7" fill="#FFF" stroke="#1D9BF0" strokeWidth="2" />
      {/* Label */}
      <text
        x="460"
        y="100"
        fill="#1D9BF0"
        fontSize="16"
        alignmentBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        Line 1
      </text>

      {/* -- Line 2: Pink (straight horizontal segments) -- */}
      <path
        d="M100,200 L300,200 L500,200"
        stroke="#E85CAA"
        strokeWidth="10"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Stations */}
      <circle cx="100" cy="200" r="7" fill="#FFF" stroke="#E85CAA" strokeWidth="2" />
      <circle cx="300" cy="200" r="7" fill="#FFF" stroke="#E85CAA" strokeWidth="2" />
      <circle cx="500" cy="200" r="7" fill="#FFF" stroke="#E85CAA" strokeWidth="2" />
      {/* Label */}
      <text
        x="510"
        y="200"
        fill="#E85CAA"
        fontSize="16"
        alignmentBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        Line 2
      </text>

      {/* -- Line 3: Yellow (simple horizontal line) -- */}
      <path
        d="M80,300 L520,300"
        stroke="#FAC751"
        strokeWidth="10"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Stations */}
      <circle cx="80" cy="300"  r="7" fill="#FFF" stroke="#FAC751" strokeWidth="2" />
      <circle cx="300" cy="300" r="7" fill="#FFF" stroke="#FAC751" strokeWidth="2" />
      <circle cx="520" cy="300" r="7" fill="#FFF" stroke="#FAC751" strokeWidth="2" />
      {/* Label */}
      <text
        x="530"
        y="300"
        fill="#FAC751"
        fontSize="16"
        alignmentBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        Line 3
      </text>

      {/* -- Line 4: Orange (angled) -- */}
      <path
        d="M150,450 L300,350 L450,450"
        stroke="#F37F26"
        strokeWidth="10"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Stations */}
      <circle cx="150" cy="450" r="7" fill="#FFF" stroke="#F37F26" strokeWidth="2" />
      <circle cx="300" cy="350" r="7" fill="#FFF" stroke="#F37F26" strokeWidth="2" />
      <circle cx="450" cy="450" r="7" fill="#FFF" stroke="#F37F26" strokeWidth="2" />
      {/* Label */}
      <text
        x="460"
        y="450"
        fill="#F37F26"
        fontSize="16"
        alignmentBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        Line 4
      </text>

      {/* -- Line 5: Purple (angled) -- */}
      <path
        d="M80,400 L150,250 L400,300 L520,100"
        stroke="#9B51E0"
        strokeWidth="10"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* Stations */}
      <circle cx="80"  cy="400" r="7" fill="#FFF" stroke="#9B51E0" strokeWidth="2" />
      <circle cx="150" cy="250" r="7" fill="#FFF" stroke="#9B51E0" strokeWidth="2" />
      <circle cx="400" cy="300" r="7" fill="#FFF" stroke="#9B51E0" strokeWidth="2" />
      <circle cx="520" cy="100" r="7" fill="#FFF" stroke="#9B51E0" strokeWidth="2" />
      {/* Label */}
      <text
        x="530"
        y="100"
        fill="#9B51E0"
        fontSize="16"
        alignmentBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
      >
        Line 5
      </text>
    </svg>
  );
};

export default SubwayLines;
