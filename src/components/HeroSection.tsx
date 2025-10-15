import HeroBackground from "./HeroBackground";
import Typewriter from "./Typewriter";

const HeroSection = () => {
  const handleCVDownload = () => {
    // TODO: Implement CV download functionality
    console.log('CV download clicked');
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section hero-section" aria-labelledby="hero-title">
      <HeroBackground
        hueShift={-30}
        noiseIntensity={0.05}
        scanlineIntensity={0.1}
        speed={0.8}
        scanlineFrequency={0.01}
        warpAmount={0.5}
        resolutionScale={1.0}
      />
      <div className="section-content">
        <h1 id="hero-title" className="hero-title">
          <span className="hero-name" aria-hidden="true">Klein Alex</span>
          <span className="hero-dash" aria-hidden="true">-</span>
          <span className="hero-role" aria-hidden="true">
            <Typewriter
              words={["Front-end fejlesztés", "Webfejlesztés", "Back-end fejlesztés"]}
              typeSpeed={120}
              deleteSpeed={80}
              delayBetweenWords={2500}
            />
          </span>
        </h1>
        <button
          className="hero-cv-button"
          onClick={handleCVDownload}
          aria-label="Önéletrajz letöltése PDF formátumban"
          type="button"
        >
          Önéletrajz
        </button>
        <button
          className="hero-arrow"
          onClick={handleScrollDown}
          aria-label="Görgetés lefelé az About szekcióhoz"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M12 5V19M5 12L12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;