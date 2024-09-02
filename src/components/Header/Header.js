import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">MyLogo</div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
            </nav>
        </header>
    );
};

export default Header;
