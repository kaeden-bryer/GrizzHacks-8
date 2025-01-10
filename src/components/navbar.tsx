"use client";
import React, { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">GH</div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#tracks">Tracks</a></li>
        <li><a href="#sponsor">Sponsor</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
      <button 
        className="navbar-toggle" 
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        ☰
      </button>

      
    </nav>
    {isMenuOpen && (
      <ul className="dropdown-content">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#tracks">Tracks</a>
        </li>
        <li>
          <a href="#sponsor">Sponsor</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
      </ul>
    )}
    </div>
  );
  
}
