import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { GiMountains } from 'react-icons/gi'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className='footer-details'>
                    <div className="footer-logo">
                        <h1><GiMountains /> MahaForts</h1>
                        <p>"Witness the legacy, celebrate the history."</p>
                    </div>
                    <div className="footer-contact-info">
                        <h1>Contact</h1>
                        <address>
                            <p>+91 267484839</p>
                            <p>Pune, Maharashtra</p>
                            <p><a href="mailto:forts@gmail.com">forts@gmail.com</a></p>
                        </address>
                    </div>
                    <div className="footer-quick-links">
                        <h1>Quick Links</h1>
                        <Link to='/'>Home</Link>
                        <Link to='/explore'>Explore Forts</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className="footer-inquiry">
                        <h1>Inquiries at :</h1>
                        <p><a href="mailto:mahaforts@gmail.com">mahaforts@gmail.com</a></p>
                    </div>
                    <div className=" footer-media">
                        <h1>Social Media</h1>
                        <div className="footer-social-media">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                        </div>

                    </div>
                </div>
            </footer >
            <p className='copyright'>&copy; 2024 MahaForts. All Rights Reserved.</p>
        </div >
    )
}
