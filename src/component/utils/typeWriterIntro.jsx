import React, { useEffect } from 'react';

const TypewriterIntro = ({ onComplete }) => {
  useEffect(() => {
    // This effect will trigger once the component is mounted.
    // Delay of 4 seconds to match the duration of the typing animation.
    const typingDuration = 4000; // 4 seconds

    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete(); // Notify that typing is finished
      }
    }, typingDuration);

    return () => clearTimeout(timer); // Clean up the timeout when component unmounts
  }, [onComplete]);

  return (
    <div className="intro-wrapper">
      Hey, I'm Faris Attallah 👋
    </div>
  );
};

export default TypewriterIntro;
