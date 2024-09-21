import React, { useState, useEffect } from "react";

const Subtitle = ({ isVisible }) => {
  const [visibleWords, setVisibleWords] = useState(0);

  const subtitleText = "Enthusiastic and skilled full-stack developer with hands-on experience in building robust backend infrastructures and user-friendly interfaces.";

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setVisibleWords(prev => (prev < subtitleText.split(" ").length ? prev + 1 : prev));
      }, 200); // Adjust the interval to control the speed

      return () => clearInterval(interval);
    }
  }, [isVisible, subtitleText]);

  return (
    <div>
      {subtitleText.split(" ").map((word, index) => (
        <span
          key={index}
          className={index < visibleWords ? "fade-in" : "hidden"}
          style={{ marginRight: "5px" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default Subtitle;
