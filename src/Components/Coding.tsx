import React, { useState, useEffect, useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular,
  FaSass, FaGitAlt, FaGithub, FaNpm,
  FaCode, FaPalette, FaMobileAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';
import { projects } from '../config/projects';

const Coding: React.FC = () => {
  const [activeFile, setActiveFile] = useState<'html' | 'css' | 'js'>('html');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Refs for sections
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => new Set([...prev, sectionId]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = [section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Immediately show sections that are already visible on load
    const checkInitialVisibility = () => {
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            const sectionId = section.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        }
      });
    };

    // Check initial visibility after a short delay to ensure DOM is ready
    setTimeout(checkInitialVisibility, 100);

    return () => observer.disconnect();
  }, []);

  // File contents as editable strings (limited to 7 lines)
  const [fileContents, setFileContents] = useState({
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Az első weboldalam</title>
</head>
<body>
  <div>Hello, World!</div>
</body>
</html>

<!-- Módosítsd a kódot, ha szeretnéd! -->`,
    css: `body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

div {
  color: #333;
  font-size: 24px;
}`,
    js: `
const numbers = [1, 2, 3, 4, 5];

const multiplyNums = numbers.map(num => num * 2);

console.log(multiplyNums);
`
  });

  // File metadata
  const files = {
    html: {
      name: 'hello-world.html',
      icon: '📄',
      language: 'html'
    },
    css: {
      name: 'style.css',
      icon: '🎨',
      language: 'css'
    },
    js: {
      name: 'app.js',
      icon: '⚡',
      language: 'javascript'
    }
  };

  const floatingIcons = [
    { icon: <FaHtml5 />, delay: 0, duration: 20, size: '2rem' },
    { icon: <FaCss3Alt />, delay: 2, duration: 25, size: '2.5rem' },
    { icon: <FaJs />, delay: 4, duration: 18, size: '2.2rem' },
    { icon: <SiTypescript />, delay: 1, duration: 22, size: '2.3rem' },
    { icon: <FaReact />, delay: 3, duration: 19, size: '2.4rem' },
    { icon: <FaAngular />, delay: 5, duration: 24, size: '2.1rem' },
    { icon: <FaSass />, delay: 2, duration: 21, size: '2.6rem' },
    { icon: <FaGitAlt />, delay: 4, duration: 23, size: '2.3rem' },
    { icon: <FaGithub />, delay: 1, duration: 20, size: '2.5rem' },
    { icon: <FaNpm />, delay: 3, duration: 26, size: '2.2rem' },
    { icon: <FaCode />, delay: 5, duration: 19, size: '2.4rem' },
    { icon: <FaPalette />, delay: 0, duration: 22, size: '2.1rem' },
    { icon: <FaMobileAlt />, delay: 2, duration: 25, size: '2.3rem' },
    { icon: <SiMongodb />, delay: 4, duration: 21, size: '2.2rem' },
    { icon: <SiFirebase />, delay: 1, duration: 24, size: '2.5rem' }
  ];

  return (
    <div className="page coding-page">
      {/* Section 1 - Introduction */}
      <section
        ref={section1Ref}
        data-section="section-1"
        className={`coding-section section-1 ${visibleSections.has('section-1') ? 'animate-in' : ''}`}
      >
        {/* Minimal Background Animation */}
        <div className="section-bg-animation">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
          <div className="bg-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
            <div className="dot dot-6"></div>
            <div className="dot dot-7"></div>
            <div className="dot dot-8"></div>
            <div className="dot dot-9"></div>
            <div className="dot dot-10"></div>
            <div className="dot dot-11"></div>
            <div className="dot dot-12"></div>
            <div className="dot dot-13"></div>
            <div className="dot dot-14"></div>
            <div className="dot dot-15"></div>
            {/* Colored dots for enhanced visual appeal */}
            <div className="dot dot-16 colored cyan"></div>
            <div className="dot dot-17 colored cyan"></div>
            <div className="dot dot-18 colored magenta"></div>
            <div className="dot dot-19 colored magenta"></div>
            <div className="dot dot-20 colored yellow"></div>
            <div className="dot dot-21 colored yellow"></div>
          </div>
        </div>

        <div className="section-content">
          <h2>A történetem</h2>
          <p>Már pici gyerekként érdekelt az informatika világa, akkoriban játéktervező szerettem volna lenni.</p>
          <p>Az évek haladtával teljesen eltértem ezektől az elképzelésektől, majd 3 évvel ezelőtt úgy döntöttem, hogy felélesztem az álmom és fejlesztő leszek, ekkor kezdtem el Front-endet tanulni.</p>

          {/* VS Code-like Code Editor */}
          <div className="vscode-editor">
            <div className="editor-header">
              <div className="window-controls">
                <div className="control red"></div>
                <div className="control yellow"></div>
                <div className="control green"></div>
              </div>
              <div className="tabs">
                <div className={`tab ${activeFile === 'html' ? 'active' : ''}`} onClick={() => setActiveFile('html')}>
                  <span className="tab-icon">{files.html.icon}</span>
                  <span className="tab-title">{files.html.name}</span>
                  <span className="tab-close">×</span>
                </div>
                <div className={`tab ${activeFile === 'css' ? 'active' : ''}`} onClick={() => setActiveFile('css')}>
                  <span className="tab-icon">{files.css.icon}</span>
                  <span className="tab-title">{files.css.name}</span>
                  <span className="tab-close">×</span>
                </div>
                <div className={`tab ${activeFile === 'js' ? 'active' : ''}`} onClick={() => setActiveFile('js')}>
                  <span className="tab-icon">{files.js.icon}</span>
                  <span className="tab-title">{files.js.name}</span>
                  <span className="tab-close">×</span>
                </div>
              </div>
              <div className="editor-actions">
                <span className="minimize">_</span>
                <span className="maximize">⬜</span>
                <span className="close">×</span>
              </div>
            </div>

            <div className="editor-content">
              <div className="line-numbers">
                {Array.from({ length: 7 }, (_, index) => (
                  <div key={index} className="line-number">{index + 1}</div>
                ))}
              </div>

              <div className="code-area">
                <textarea
                  className="code-editor"
                  value={fileContents[activeFile]}
                  onChange={(e) => {
                    const newContent = e.target.value;
                    setFileContents(prev => ({
                      ...prev,
                      [activeFile]: newContent
                    }));
                  }}
                  spellCheck={false}
                  data-language={files[activeFile].language}
                />
              </div>
            </div>

            <div className="editor-footer">
              <div className="status-bar">
                <span className="status-item">
                  {activeFile === 'html' ? 'HTML' : activeFile === 'css' ? 'CSS' : 'JavaScript'}
                </span>
                <span className="status-item">UTF-8</span>
                <span className="status-item">LF</span>
                <span className="status-item">Prettier</span>
                <span className="status-item">Go Live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Technologies */}
      <section
        ref={section2Ref}
        data-section="section-2"
        className={`coding-section section-2 ${visibleSections.has('section-2') ? 'animate-in' : ''}`}
      >
        {/* Floating Tech Icons Background */}
        <div className="floating-icons-bg">
          {floatingIcons.map((item, index) => (
            <div
              key={index}
              className="floating-icon"
              style={{
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
                fontSize: item.size
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>

        <div className="section-content">
          <h2>Tech Stack</h2>
          <p>Self Taught Front-end fejlesztőként a legújabb technológiák és eszközök elsajátítására törekszem, hogy mindig naprakész legyek.</p>
          <p>Git és GitHub használatával kezelem a projekteket, és igyekszek felhasználóbarát, fenntartható megoldásokat létrehozni.</p>

          {/* Technology Showcase */}
          <div className="tech-showcase">
            <div className="tech-item">
              <FaReact className="tech-icon" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <SiTypescript className="tech-icon" />
              <span>TypeScript</span>
            </div>
            <div className="tech-item">
              <FaAngular className="tech-icon" />
              <span>Angular</span>
            </div>
            <div className="tech-item">
              <FaHtml5 className="tech-icon" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <FaCss3Alt className="tech-icon" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <FaJs className="tech-icon" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <FaGitAlt className="tech-icon" />
              <span>Git</span>
            </div>
            <div className="tech-item">
              <FaGithub className="tech-icon" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Projects */}
      <section
        ref={section3Ref}
        data-section="section-3"
        className={`coding-section section-3 ${visibleSections.has('section-3') ? 'animate-in' : ''}`}
      >
        {/* Background Animation - Floating Dots */}
        <div className="section-3-bg-animation">
          <div className="bg-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
            <div className="dot dot-5"></div>
            <div className="dot dot-6"></div>
            <div className="dot dot-7"></div>
            <div className="dot dot-8"></div>
            <div className="dot dot-9"></div>
            <div className="dot dot-10"></div>
            <div className="dot dot-11"></div>
            <div className="dot dot-12"></div>
            <div className="dot dot-13"></div>
            <div className="dot dot-14"></div>
            <div className="dot dot-15"></div>
            <div className="dot dot-16"></div>
            <div className="dot dot-17"></div>
            <div className="dot dot-18"></div>
            <div className="dot dot-19"></div>
            <div className="dot dot-20"></div>
            <div className="dot dot-21"></div>
            <div className="dot colored cyan dot-22"></div>
            <div className="dot colored magenta dot-23"></div>
            <div className="dot colored yellow dot-24"></div>
            <div className="dot colored cyan dot-25"></div>
            <div className="dot colored magenta dot-26"></div>
            <div className="dot colored yellow dot-27"></div>
            <div className="dot colored cyan dot-28"></div>
            <div className="dot colored magenta dot-29"></div>
            <div className="dot colored yellow dot-30"></div>
          </div>
        </div>
        <div className="section-content">
          <h2>Munkáim</h2>
          <p className="section-subtitle">Itt találod az aktuális kész és folyamatban lévő munkáim.</p>

          <div className="works-grid">
            {projects.map((project) => {
              const IconComponent = project.icon === 'FaCode' ? FaCode :
                                   project.icon === 'FaMobileAlt' ? FaMobileAlt :
                                   project.icon === 'FaPalette' ? FaPalette : FaCode;

              return (
                <div
                  key={project.id}
                  className={`work-card status-${project.status}`}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                  style={{ cursor: project.link ? 'pointer' : 'default' }}
                >
                  <div className="work-image">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="work-preview-image"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.parentElement?.querySelector('.work-placeholder') as HTMLElement;
                        if (placeholder) {
                          placeholder.style.display = 'flex';
                          placeholder.style.position = 'absolute';
                          placeholder.style.top = '0';
                          placeholder.style.left = '0';
                          placeholder.style.width = '100%';
                          placeholder.style.height = '100%';
                        }
                      }}
                    />
                    <div className="work-placeholder">
                      <IconComponent className="work-icon" />
                    </div>
                    {project.link && (
                      <div className="work-overlay">
                        <FaExternalLinkAlt className="overlay-icon" />
                        <span className="overlay-text">Megtekintés</span>
                      </div>
                    )}
                  </div>
                  <div className="work-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="work-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="work-status">
                      <span className={`status ${project.status}`}>{project.statusText}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 - Future */}
      <section
        ref={section4Ref}
        data-section="section-4"
        className={`coding-section section-4 ${visibleSections.has('section-4') ? 'animate-in' : ''}`}
      >
        <div className="section-content">
          <h2>Keress Bátran</h2>
          <p>Nyitott vagyok bármilyen megkeresésre, legyen az új projekt, együttműködés vagy konzultáció.</p>

          <div className="contact-cta">
            <p>Készen állsz egy beszélgetésre?</p>
            <button
              className="contact-button"
              onClick={() => window.location.href = 'tel:+36305718139'}
            >
              Kapcsolatfelvétel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coding;
