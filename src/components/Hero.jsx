import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaGlobe } from "react-icons/fa";
import { useEffect } from "react";
 // Import styles for background effects

const HeroText = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden"; // Prevent horizontal scroll
  }, []);

  return (
    <div className="hero-section">
      {/* Shiny Stars Background */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        Welcome to <span className="highlight">Primrose Tech</span>
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2 }}
        className="animated-text"
      >
        <FaLaptopCode className="icon" /> <span>Innovative Tech Solutions</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="animated-text"
      >
        <FaRocket className="icon" /> <span>Empowering Businesses</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8 }}
        className="animated-text"
      >
        <FaGlobe className="icon" /> <span>Future-Ready Technology</span>
      </motion.div>
    </div>
  );
};

export default HeroText;
