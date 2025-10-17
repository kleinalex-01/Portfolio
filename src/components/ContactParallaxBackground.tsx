import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

interface ContactParallaxBackgroundProps {
  scrollTargetRef: RefObject<HTMLElement | null>;
}

const ContactParallaxBackground = ({ scrollTargetRef }: ContactParallaxBackgroundProps) => {
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start end", "end start"],
  });

  const primaryY = useTransform(scrollYProgress, [0, 1], ["-12%", "6%"]); // Subtle upward drift
  const primaryScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const primaryOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.2]);

  const secondaryY = useTransform(scrollYProgress, [0, 1], ["8%", "-4%"]); // Opposite direction for depth
  const secondaryScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);
  const secondaryOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.32]);

  const accentY = useTransform(scrollYProgress, [0, 1], ["-6%", "12%"]); // Adds a third depth plane
  const accentScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.1]);
  const accentOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.28]);

  return (
    <div className="contact-parallax" aria-hidden="true">
      <motion.div
        className="parallax-layer layer-primary"
        style={{ y: primaryY, scale: primaryScale, opacity: primaryOpacity }}
      />
      <motion.div
        className="parallax-layer layer-secondary"
        style={{ y: secondaryY, scale: secondaryScale, opacity: secondaryOpacity }}
      />
      <motion.div
        className="parallax-layer layer-accent"
        style={{ y: accentY, scale: accentScale, opacity: accentOpacity }}
      />
    </div>
  );
};

export default ContactParallaxBackground;
