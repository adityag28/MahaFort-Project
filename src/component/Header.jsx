import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiMountains } from 'react-icons/gi';
import { signOut } from 'firebase/auth';
import { auth } from '../firbase'; // adjust path if needed

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/auth');
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    const user = auth.currentUser;

    return (
        <header className="header">
            <div className="logo">
                <Link to="/app">
                    <h1><GiMountains className="mountains-icon" /> MahaForts</h1>
                </Link>
            </div>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/app" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/app/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
                <Link to="/app/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/app/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                {user && (
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                )}
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
