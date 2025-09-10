import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="page home-page dark-theme">
      <div className="container">
        <div className="welcome-section">
          <div className="profile-glow"></div>
          <img
            src="/alex-photo.png"
            alt="Alex Profile"
            className="welcome-profile-pic"
          />
          <h1 className="welcome-title">Szia, üdv az oldalamon</h1>
          <div className="welcome-subtitle">
            <span className="typing-text">Front-end fejlesztő</span>
            <span className="cursor">|</span>
          </div>
        </div>
        <div className="home-content">
          <div className="social-links-section">
            <div className="section-header">
              <h2>Kövess engem</h2>
              <div className="header-decoration"></div>
            </div>
            <div className={`social-links ${isVisible ? 'animate-in' : ''}`}>
              <a href="https://instagram.com/kleinalex01" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <div className="social-icon-wrapper">
                  <AiOutlineInstagram className="social-icon" />
                  <div className="icon-glow"></div>
                </div>
                <span className="social-text">Instagram</span>
                <div className="social-particles"></div>
              </a>
              <a href="https://facebook.com/kleinalex01" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <div className="social-icon-wrapper">
                  <FaFacebookF className="social-icon" />
                  <div className="icon-glow"></div>
                </div>
                <span className="social-text">Facebook</span>
                <div className="social-particles"></div>
              </a>
              <a href="https://github.com/kleinalex-01" target="_blank" rel="noopener noreferrer" className="social-link github">
                <div className="social-icon-wrapper">
                  <AiOutlineGithub className="social-icon" />
                  <div className="icon-glow"></div>
                </div>
                <span className="social-text">GitHub</span>
                <div className="social-particles"></div>
              </a>
              <a href="https://linkedin.com/in/kleinalex01" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <div className="social-icon-wrapper">
                  <AiOutlineLinkedin className="social-icon" />
                  <div className="icon-glow"></div>
                </div>
                <span className="social-text">LinkedIn</span>
                <div className="social-particles"></div>
              </a>
            </div>
            <div className="social-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Követő</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projekt</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Év tapasztalat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
