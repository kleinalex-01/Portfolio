import { motion } from "motion/react";

interface WaveDividerProps {
  className?: string;
}

export const HeroAboutDivider = ({ className = "" }: WaveDividerProps) => {
  return (
    <div className={`hero-about-divider ${className}`}>
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <defs>
          <linearGradient id="heroAboutGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#0d1b2a" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,60 L1200,120 L0,120 Z"
          fill="url(#heroAboutGradient)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  );
};

export const WaveDivider = ({ className = "" }: WaveDividerProps) => {
  return (
    <div className={`wave-divider ${className}`}>
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
          fill="#e8f5e8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  );
};

export const GeometricDivider = ({ className = "" }: WaveDividerProps) => {
  return (
    <div className={`geometric-divider ${className}`}>
      <motion.div
        className="geometric-shape"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <polygon points="0,120 600,0 1200,120" fill="#fff9c4" />
        </svg>
      </motion.div>
    </div>
  );
};

export const ArcDivider = ({ className = "" }: WaveDividerProps) => {
  return (
    <div className={`arc-divider ${className}`}>
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M0,120 Q300,0 600,60 T1200,120 L1200,120 L0,120 Z"
          fill="#f3e5f5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </motion.svg>
    </div>
  );
};