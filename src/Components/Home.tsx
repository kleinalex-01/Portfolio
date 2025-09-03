import { useEffect, useState, useRef } from "react";
import { TypewriterText } from "./TypewriterText";

export const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  const sections = ['hero', '2023', '2024', '2025', 'contact'];
  
  useEffect(() => {
    // Intersection Observer with better settings for scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeIndex = 0;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              activeIndex = sectionIndex;
            }
          }
        });
        
        if (maxRatio > 0.3 && activeIndex !== currentSection && activeIndex !== -1) {
          setCurrentSection(activeIndex);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px'
      }
    );

    // Observe all sections
    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Enhanced scroll event listener as backup
    const handleScroll = () => {
      const homeElement = homeRef.current;
      if (!homeElement) return;
      
      const viewportHeight = homeElement.clientHeight;
      
      // Calculate which section is most visible
      let maxVisibility = 0;
      let mostVisibleIndex = 0;
      
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const homeRect = homeElement.getBoundingClientRect();
        
        const visibleTop = Math.max(0, rect.top - homeRect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom - homeRect.top);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / viewportHeight;
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleIndex = index;
        }
      });
      
      if (mostVisibleIndex !== currentSection && maxVisibility > 0.3) {
        console.log('Section changed to:', mostVisibleIndex, 'from:', currentSection);
        setCurrentSection(mostVisibleIndex);
      }
    };
    
    const homeElement = homeRef.current;
    if (homeElement) {
      homeElement.addEventListener('scroll', handleScroll, { passive: true });
      // Also listen to the window scroll as fallback
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      observer.disconnect();
      if (homeElement) {
        homeElement.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSection, sections.length]);
  
  const goToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const typedSentences = [
    "Ez itt a portfolióm", 
    "Weboldalakat készítek",
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
          <div className="scroll-arrow" onClick={() => goToSection(1)}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7 10L12 15L17 10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2 - 2023 Projects */}
      <section 
        className="section section-dark timeline-section"
        ref={(el) => { sectionRefs.current[1] = el; }}
        id="projects-2023"
      >
        <div className="years-container">
          <div className="year-row">
            <div className="year-label">2023</div>
            <div className="code-snippet">
              <TypewriterText 
                staticText=""
                sentences={["<div>Hello World</div>"]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={3000}
              />
            </div>
          </div>
          <div className="year-row">
            <div className="year-label">2024</div>
            <div className="code-snippet">
              <TypewriterText 
                staticText=""
                sentences={["// Coming soon..."]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={3000}
              />
            </div>
          </div>
          <div className="year-row">
            <div className="year-label">2025</div>
            <div className="code-snippet">
              <TypewriterText 
                staticText=""
                sentences={["// Coming soon..."]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={3000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - 2024 Projects */}
      <section 
        className="section section-light timeline-section"
        ref={(el) => { sectionRefs.current[2] = el; }}
        id="projects-2024"
      >
        
      </section>

      {/* Section 4 - 2025 Projects */}
      <section 
        className="section section-dark timeline-section"
        ref={(el) => { sectionRefs.current[3] = el; }}
        id="projects-2025"
      >
        
      </section>

      {/* Section 5 - Contact */}
      <section 
        className="section section-light"
        ref={(el) => { sectionRefs.current[4] = el; }}
        id="contact"
      >
        <div className="section-container">
          <div className="section-content">
            <h2 className="section-title">Lépjünk kapcsolatba!</h2>
            <p className="section-description">
              Van egy projekt ötleted? Keress nyugodtan és beszéljük meg!
            </p>
            <div className="contact-links">
              <a href="mailto:alex@example.com" className="contact-link">
                📧 alex@example.com
              </a>
              <a href="https://linkedin.com/in/alex" className="contact-link">
                💼 LinkedIn
              </a>
              <a href="https://github.com/alex" className="contact-link">
                🔗 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator - Progress Bar Style */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ height: `${((currentSection + 1) / sections.length) * 100}%` }}
        ></div>
        <div className="section-markers">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`marker ${currentSection === index ? 'active' : ''}`}
              onClick={() => goToSection(index)}
              data-section={section.toUpperCase()}
              title={`Go to ${section}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
