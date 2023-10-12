import React from 'react';
import '../styles/Header.css';

const Header = () => {

  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      window.scroll({
        behavior: 'smooth',
        top: targetElement.getBoundingClientRect().top + window.scrollY - 60,
      });
    }
  };

  return (
    <header className="header-container">
      <div className="logo">vlad.eng</div>
      <nav className="nav">
        <a href="#home" onClick={handleNavClick}>Home</a>
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#projects" onClick={handleNavClick}>Projects</a>
        <a href="#contact" onClick={handleNavClick}>Contact</a>
      </nav>
    </header>
  );
}
export default Header;
