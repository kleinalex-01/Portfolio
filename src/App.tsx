import "./styles/main.scss";
import { HeroAboutDivider } from "./components/Dividers";
import HeroBackground from "./components/HeroBackground";
import { motion } from "motion/react";

function App() {
  return (
    <div className="App">
      <section className="section hero-section">
        <HeroBackground
          hueShift={-30}
          noiseIntensity={0.05}
          scanlineIntensity={0.1}
          speed={0.8}
          scanlineFrequency={0.01}
          warpAmount={0.5}
          resolutionScale={1}
        />
        <div className="section-content">
          <h1>Hero Section</h1>
        </div>
      </section>

      <HeroAboutDivider />

      <section className="section about-section">
        <div className="section-content">
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
      </section>

      <section className="section works-section">
        <div className="section-content">
          <h1>Works Section</h1>
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-content">
          <h1>Contact Section</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
