import { motion } from "motion/react";
import AboutWorksDivider from "./AboutWorksDivider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const AboutSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section about-section" ref={elementRef}>
      <div className={`section-content ${isVisible ? 'animate' : ''}`}>
        <h1>About Section</h1>
      </div>
      <motion.div
        className="breathing-overlay"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <AboutWorksDivider />
    </section>
  );
};

export default AboutSection;