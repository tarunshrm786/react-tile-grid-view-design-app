import React, { useState } from 'react';
import './Header.css';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="hamburger-menu">
            <button onClick={toggleMenu} className="hamburger-button">
                ☰
            </button>
            {open && (
                <ul className="hamburger-dropdown">
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            )}
        </div>
    );
};

export default HamburgerMenu;
