import WorksContactDivider from "./WorksContactDivider";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const WorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder project data - to be filled by user
  const projects = [
    {
      id: 1,
      name: "Csetényi Károly EV.",
      image: "../public/images/csetka-preview.png", // Placeholder image path
      url: "www.csetkagepeszet.hu",
      techStack: ["React", "TypeScript", "Sass"],
      description: "Klíma és Hőszivattyú rendszerek, illetve a vállalkozó bemutatása. A kliensem teljesen szabad kezet adott, csak a zöld/fehér színvilágot adta meg. A weboldal reszponzív, modern és könnyen kezelhető."
    },
    {
      id: 2,
      name: "Sörös Lilla Tamara EV.",
      image: "/images/project2-preview.jpg", // Placeholder image path
      url: "#", // Placeholder URL
      techStack: ["React", "TypeScript", "Sass"],
      description: "Projekt leírása"
    },
    {
      id: 3,
      name: "Rózsa Zsolt EV.",
      image: "/images/project3-preview.jpg", // Placeholder image path
      url: "#", // Placeholder URL
      techStack: ["Next.js", "Tailwind", "MongoDB"],
      description: "Projekt leírása"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="section works-section" ref={elementRef}>
      <div className={`section-content ${isVisible ? 'animate' : ''}`}>
        <motion.div
          className="works-container"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="works-header">
            <h2 className="works-title">
              <span className="title-line-1">Itt találod a kész</span>
              <span className="title-line-2"> és félkész munkáim</span>
            </h2>
          </div>

          {/* Mobile Carousel */}
          <div className="mobile-carousel">
            <div className="carousel-wrapper">
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link">
                      <div className="project-image-wrapper">
                        <img
                          src={project.image}
                          alt={`${project.name} előnézet`}
                          className="project-image"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder-project.jpg';
                          }}
                        />
                      </div>
                      <div className="project-content">
                        <h3 className="project-name">{project.name}</h3>
                        <div className="project-tech-stack">
                          {project.techStack.map((tech, index) => (
                            <span key={index} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="desktop-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-link">
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={`${project.name} előnézet`}
                      className="project-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder-project.jpg';
                      }}
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-name">{project.name}</h3>
                    <div className="project-tech-stack">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <WorksContactDivider />
    </section>
  );
};

export default WorksSection;