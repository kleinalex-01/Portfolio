import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar') && !target.closest('.mobile-menu-dropdown')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="main-layout">
      <nav className="navbar">
        {/* Hamburger Menu for Mobile */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          title="Menu"
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-icon">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="nav-icons">
          <Link to="/main" className="nav-icon" title="Home">
            <span className="icon">🏠</span>
          </Link>
          <Link to="/main/coding" className="nav-icon" title="Coding">
            <span className="icon">💻</span>
          </Link>
          <Link to="/main/photography" className="nav-icon" title="Photography">
            <span className="icon">📸</span>
          </Link>
          <Link to="/main/bodybuilding" className="nav-icon" title="Bodybuilding">
            <span className="icon">💪</span>
          </Link>
          <Link to="/main/cars" className="nav-icon" title="Cars">
            <span className="icon">🚗</span>
          </Link>
          <Link to="/main/contact" className="nav-icon" title="Contact">
            <span className="icon">📧</span>
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/main" className="mobile-nav-icon" onClick={closeMenu} title="Home">
            <span className="icon">🏠</span>
          </Link>
          <Link to="/main/coding" className="mobile-nav-icon" onClick={closeMenu} title="Coding">
            <span className="icon">💻</span>
          </Link>
          <Link to="/main/photography" className="mobile-nav-icon" onClick={closeMenu} title="Photography">
            <span className="icon">📸</span>
          </Link>
          <Link to="/main/bodybuilding" className="mobile-nav-icon" onClick={closeMenu} title="Bodybuilding">
            <span className="icon">💪</span>
          </Link>
          <Link to="/main/cars" className="mobile-nav-icon" onClick={closeMenu} title="Cars">
            <span className="icon">🚗</span>
          </Link>
          <Link to="/main/contact" className="mobile-nav-icon" onClick={closeMenu} title="Contact">
            <span className="icon">📧</span>
          </Link>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
