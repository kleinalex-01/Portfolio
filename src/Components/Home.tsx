import { useEffect, useState, useRef } from "react";
import Background from "./Background";

export const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const homeRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  const sections = ['hero', '2023', '2024', '2025', 'contact'];
  
  useEffect(() => {
    // Throttle function for performance optimization
    const throttle = <T extends (...args: unknown[]) => void>(
      func: T,
      limit: number
    ): ((...args: Parameters<T>) => void) => {
      let inThrottle: boolean;
      return (...args: Parameters<T>) => {
        if (!inThrottle) {
          func(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

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

    // Optimized scroll event listener with throttling
    const handleScroll = throttle(() => {
      const homeElement = homeRef.current;
      if (!homeElement) return;
      
      try {
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
          setCurrentSection(mostVisibleIndex);
        }
      } catch (error) {
        console.warn('Error in scroll handler:', error);
      }
    }, 100); // Throttle to 100ms

    const homeElement = homeRef.current;
    if (homeElement) {
      // Single scroll listener with passive option for better performance
      homeElement.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      observer.disconnect();
      if (homeElement) {
        homeElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSection, sections.length]);
  
  const goToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="home" ref={homeRef}>
      {/* Section 1 - Hero */}
      <section 
        className="section section-hero-iridescent"
        ref={(el) => { sectionRefs.current[0] = el; }}
        id="hero"
      >
        <Background 
          color={[0.4, 0.7, 1.0]}
          speed={0.6}
          amplitude={0.03}
          mouseReact={true}
        />
      </section>

      {/* Section 2 - Empty */}
      <section 
        className="section section-dark"
        ref={(el) => { sectionRefs.current[1] = el; }}
        id="section-2"
      >
        
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
