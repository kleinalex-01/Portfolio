import React from 'react';
import Background from './Background';
import Typewriter from './Typewriter';

const LandingPage: React.FC = () => {
  const greetings = [
    'Üdvözöllek!',
    'Hello!',
    'Hola!',
    'Bonjour!',
    'Ciao!',
    'Hallo!',
    'Olá!',
    'こんにちは!',
    '안녕하세요!',
    '你好!',
    'Привет!'
  ];

  return (
    <div className="home">
      <section className="section section-hero-iridescent">
        <Background
          color={[0.4, 0.7, 1.0]}
          speed={0.6}
          amplitude={0.03}
          mouseReact={false}
        />
        <div className="welcome-container">
          <h1 className="welcome-title">
            <Typewriter
              texts={greetings}
              typingSpeed={120}
              deletingSpeed={60}
              pauseTime={2500}
            />
          </h1>
          <div className="welcome-buttons">
            <button className="glass-button cv-button">
              CV
            </button>
            <button className="glass-button arrow-button">
              Tovább
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
