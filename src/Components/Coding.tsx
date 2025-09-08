import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular,
  FaSass, FaGitAlt, FaGithub, FaNpm,
  FaCode, FaPalette, FaMobileAlt
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';

const Coding: React.FC = () => {
  // Floating tech icons for background animation
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
      <section className="coding-section section-1">
        <div className="section-content">
          <h2>Kódolás Világa</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>

      {/* Section 2 - Technologies */}
      <section className="coding-section section-2">
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
      <section className="coding-section section-3">
        <div className="section-content">
          <h2>Projektek</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.</p>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.</p>
        </div>
      </section>

      {/* Section 4 - Future */}
      <section className="coding-section section-4">
        <div className="section-content">
          <h2>Jövőbeli Célok</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.</p>
          <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
        </div>
      </section>
    </div>
  );
};

export default Coding;
