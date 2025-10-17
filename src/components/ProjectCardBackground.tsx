import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface ProjectCardBackgroundProps {
  icons: IconType[];
  iconCount?: number;
}

const ProjectCardBackground = ({ 
  icons, 
  iconCount = 6 
}: ProjectCardBackgroundProps) => {
  // Generate random positions and animation parameters for each icon
  const floatingIcons = Array.from({ length: iconCount }, (_, i) => {
    const Icon = icons[i % icons.length];
    
    return {
      id: i,
      Icon,
      // Random starting positions (percentage-based)
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      // Random sizes
      size: 40 + Math.random() * 50, // 40-90px (increased from 30-70)
      // Random opacity
      opacity: 0.25 + Math.random() * 0.2, // 0.25-0.45 (increased from 0.15-0.3)
      // Random animation duration
      duration: 15 + Math.random() * 15, // 15-30 seconds
      // Random rotation
      rotation: Math.random() * 360,
    };
  });

  return (
    <div className="project-card-background" aria-hidden="true">
      {floatingIcons.map(({ id, Icon, initialX, initialY, size, opacity, duration, rotation }) => (
        <motion.div
          key={id}
          className="floating-icon"
          style={{
            fontSize: size,
            left: `${initialX}%`,
            top: `${initialY}%`,
          }}
          initial={{
            x: 0,
            y: 0,
            rotate: rotation,
            opacity: 0,
          }}
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -25, 20, 0],
            rotate: [rotation, rotation + 180, rotation + 360],
            opacity: [0, opacity, opacity, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: id * 0.5, // Stagger the start times
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCardBackground;
