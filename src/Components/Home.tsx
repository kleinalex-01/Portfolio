import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page home-page dark-theme">
      <div className="container">
        <div className="welcome-section">
          <img
            src="/src/assets/Photos/alex-photo.png"
            alt="Alex Profile"
            className="welcome-profile-pic"
          />
          <h1 className="welcome-title">Szia, üdv az oldalamon</h1>
        </div>
        <p>This is the main home page of my portfolio website.</p>
        <div className="home-content">
          <section className="hero-section">
            <h2>About Me</h2>
            <p>I'm a passionate developer with interests in coding, photography, bodybuilding, and cars.</p>
          </section>

          <section className="quick-links">
            <h2>Explore My Interests</h2>
            <div className="links-grid">
              <a href="/main/coding" className="interest-link coding">
                <div className="icon">💻</div>
                <h3>Coding</h3>
                <p>My programming projects and skills</p>
              </a>
              <a href="/main/photography" className="interest-link photography">
                <div className="icon">📸</div>
                <h3>Photography</h3>
                <p>My photography work and techniques</p>
              </a>
              <a href="/main/bodybuilding" className="interest-link bodybuilding">
                <div className="icon">💪</div>
                <h3>Bodybuilding</h3>
                <p>My fitness journey and achievements</p>
              </a>
              <a href="/main/cars" className="interest-link cars">
                <div className="icon">🚗</div>
                <h3>Cars</h3>
                <p>My automotive interests and projects</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
