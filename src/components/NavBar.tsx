import React, { useState } from 'react';
import '../styles/NavBar.css';
import logo from '../assets/main.jpg';

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* hamburger toggle (only visible <768px) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <div className={`nav-linksP ${menuOpen ? 'show' : ''}`}>
        <a href="/" className="nav-linkP">How it works</a>
        <a href="/about" className="nav-linkP">Discover creators</a>
        <a href="/social" className="nav-linkP">Social integrations</a>
        <a href="/costume" className="nav-linkP">Custom stores</a>
        <a
          href="#start-creating"
          className="nav-linkP start-btn-hover"
          style={{
            backgroundColor: '#FFB800',
            color: '#4B13B0',
            padding: '8px 16px',
            borderRadius: '4px',
            display: 'inline-block',
            textAlign: 'center',
            fontWeight: 600,
            transition: 'color 0.3s'
          }}
        >
          Start creating
        </a>
        <a href="#login" className="nav-linkP">Login</a>
      </div>
    </nav>
    
    
  );
};

export default NavBar;
