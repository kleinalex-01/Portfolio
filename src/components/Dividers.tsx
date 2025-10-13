import { motion } from "motion/react";

interface HeroAboutDividerProps {
  className?: string;
}

export const HeroAboutDivider = ({ className = "" }: HeroAboutDividerProps) => {
  return (
    <div className={`hero-about-divider ${className}`}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 0v80l227.5 18c12.1 1 22.5-8.6 22.5-20.7s10.4-21.8 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8s10.4-21.7 22.5-20.8l205 16.3c12.1 1 22.5-8.6 22.5-20.8S760.4 5 772.5 6L1000 24V0H0Z"
          fill="#000"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  );
};