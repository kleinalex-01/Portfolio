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
                <div className="tab active">
                  <span className="tab-icon">📄index.html</span>
                  <span className="tab-title">hello-world.html</span>
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
                <div className="line-number">1</div>
                <div className="line-number">2</div>
                <div className="line-number">3</div>
                <div className="line-number">4</div>
                <div className="line-number">5</div>
              </div>

              <div className="code-area">
                <div className="code-line">
                  <span className="line-content">
                    <span className="tag">&lt;</span>
                    <span className="tag-name">!DOCTYPE</span>
                    <span className="attribute-name"> html</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content">
                    <span className="tag">&lt;</span>
                    <span className="tag-name">html</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content indent">
                    <span className="tag">&lt;</span>
                    <span className="tag-name">head</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content indent-double">
                    <span className="tag">&lt;</span>
                    <span className="tag-name">title</span>
                    <span className="tag">&gt;</span>
                    <span className="text-content">My first app</span>
                    <span className="tag">&lt;/</span>
                    <span className="tag-name">title</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content indent">
                    <span className="tag">&lt;/</span>
                    <span className="tag-name">head</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content indent">
                    <span className="tag">&lt;</span>
                    <span className="tag-name">body</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content indent-double">
                    <span className="tag">&lt;</span>
                    <span className="tag-name">div</span>
                    <span className="tag">&gt;</span>
                    <span className="text-content">Hello, World!</span>
                    <span className="tag">&lt;/</span>
                    <span className="tag-name">div</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content indent">
                    <span className="tag">&lt;/</span>
                    <span className="tag-name">body</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-content">
                    <span className="tag">&lt;/</span>
                    <span className="tag-name">html</span>
                    <span className="tag">&gt;</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="editor-footer">
              <div className="status-bar">
                <span className="status-item">HTML</span>
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
