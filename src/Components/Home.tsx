import { useEffect, useState, useRef } from "react";
import { TypewriterText } from "./TypewriterText";

export const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.round(scrollPosition / windowHeight);
      
      if (currentIndex !== currentSection && currentIndex >= 0 && currentIndex < sections.length) {
        setCurrentSection(currentIndex);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, sections.length]);
  
  const goToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const typedSentences = [
    "Weboldalakat készítek",
    "Ez itt a portfolióm", 
    "Segítek a vállalkozásodnak"
  ];
  return (
    <div className="home" ref={homeRef}>
      {/* Section 1 - Hero */}
      <section 
        className="section section-light"
        ref={(el) => { sectionRefs.current[0] = el; }}
        id="hero"
      >
        <div className="hero-content">
          <TypewriterText 
            staticText="Szia, Alex vagyok és"
            sentences={typedSentences}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2500}
          />
        </div>
      </section>

      {/* Section 2 - About */}
      <section 
        className="section section-about section-dark"
        ref={(el) => { sectionRefs.current[1] = el; }}
        id="about"
      >
    
      </section>

      {/* Section 3 - Skills */}
      <section 
        className="section section-skills section-light"
        ref={(el) => { sectionRefs.current[2] = el; }}
        id="skills"
      >
        
      </section>

      {/* Section 4 - Projects */}
      <section 
        className="section section-projects section-dark"
        ref={(el) => { sectionRefs.current[3] = el; }}
        id="projects"
      >
    
      </section>

      {/* Section 5 - Contact */}
      <section 
        className="section section-contact section-light"
        ref={(el) => { sectionRefs.current[4] = el; }}
        id="contact"
      >
        
      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`indicator-dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => goToSection(index)}
            title={`Go to ${section}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
