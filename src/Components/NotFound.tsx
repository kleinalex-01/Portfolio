import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlitchText from './GlitchText';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="page not-found-page">
      <div className="container">
        <GlitchText className="not-found-title">
          Az oldal nem található
        </GlitchText>
        <p className="not-found-subtitle">
          A keresett oldal nem létezik vagy el lett helyezve.
        </p>
        <button
          className="home-button"
          onClick={handleGoHome}
        >
          Vissza a főoldalra
        </button>
      </div>
    </div>
  );
};

export default NotFound;