import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiMountains } from 'react-icons/gi';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };


    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <h1><GiMountains className="mountains-icon" /> MahaForts</h1>
                </Link>
            </div>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>

            <button
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
        </header>
    );
}
