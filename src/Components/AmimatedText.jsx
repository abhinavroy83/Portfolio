import React from 'react';
import './Animatedtext.css';

const AnimatedText = () => (
  <span className="decorative-text">
    <span className="text-left">Developer</span>
    <span className="line-left">
      <svg
        width="25"
        height="32"
        viewBox="0 0 25 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.25"
          d="M1.41031 1.17982C13.2695 6.57078 2.16984 14.1971 10.601 20.0423C14.3219 22.622 26.6068 16.9268 23.3905 31.2778"
          stroke="#F7FAFF"
          strokeWidth="2"
        />
      </svg>
    </span>
    <span className="text-right">Designer</span>
    <span className="line-right">
      <svg
        width="21"
        height="35"
        viewBox="0 0 21 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.25"
          d="M20.3883 1.15857C9.3883 8.15858 21.7006 14.3475 14.2006 21.3475C10.8906 24.4368 -2.29951 20.3475 3.2005 34.3476"
          stroke="#F7FAFF"
          strokeWidth="2"
        />
      </svg>
    </span>
  </span>
);

export default AnimatedText;
