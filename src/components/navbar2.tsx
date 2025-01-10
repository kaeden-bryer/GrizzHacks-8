"use client";
import React, { useState } from "react";
import '../styles/navbar.css'; // Make sure to import the CSS file


export default function Dropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log("Dropdown visible:", !showDropdown); // Log to see if it's toggling
  };

  return (
    
    <div>
        <ul className="navbar">
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
          <li>
          <button className="dropdown-btn" onClick={toggleDropdown}>
        &#9776; {/* Hamburger icon */}
      </button>
          </li>
        </ul>
        
        <div className="dropdown-container">
      
      {showDropdown && (
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
    </div>
  );
}
