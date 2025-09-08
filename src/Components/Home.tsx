import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="page home-page dark-theme">
      <div className="container">
        <div className="welcome-section">
          <img
            src="/alex-photo.png"
            alt="Alex Profile"
            className="welcome-profile-pic"
          />
          <h1 className="welcome-title">Szia, üdv az oldalamon</h1>
        </div>
        <div className="home-content">
          <div className="social-links-section">
            <div className="social-links">
              <a href="https://instagram.com/kleinalex01" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <AiOutlineInstagram className="social-icon" />
                <span className="social-text">Instagram</span>
              </a>
              <a href="https://facebook.com/kleinalex01" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FaFacebookF className="social-icon" />
                <span className="social-text">Facebook</span>
              </a>
              <a href="https://github.com/kleinalex-01" target="_blank" rel="noopener noreferrer" className="social-link github">
                <AiOutlineGithub className="social-icon" />
                <span className="social-text">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/kleinalex01" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <AiOutlineLinkedin className="social-icon" />
                <span className="social-text">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
