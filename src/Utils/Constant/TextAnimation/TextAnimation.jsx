import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const TextAnimation = () => {
    useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  // Define an array of texts that will be shown in the heading
  const headings = [
    "Big Thing.",
    "One to Watch.",
    "Great Startup.",
    "Embrace Success."
  ];

  // State to keep track of the current heading
  const [currentHeading, setCurrentHeading] = useState(headings[0]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 2000 });

    // Set interval to change the heading every 2 seconds
    const interval = setInterval(() => {
      setCurrentHeading((prev) => {
        const currentIndex = headings.indexOf(prev);
        return headings[(currentIndex + 1) % headings.length]; // Change to next heading
      });
    }, 2000); // Change every 2 seconds

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array means it runs only once on component mount

  return (
    <div style={{ textAlign: "left", padding: "0px", fontSize: "3em" }}>
      {/* Add key prop to force re-render when heading changes */}
      <h4 key={currentHeading} data-aos="fade-in">
        <span style={{color:"var(--primary-color)"}} >{currentHeading}</span>
      </h4>
    </div>
  );
};

export default TextAnimation;