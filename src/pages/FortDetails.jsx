import React, { useState, useEffect } from 'react';
import { Outlet, useParams, NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import fortsData from '../data/forts-data.json';
import { useNavigate } from 'react-router-dom';
import { IoTime } from "react-icons/io5";

export default function FortDetails() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const { id, districtName } = useParams();
    const fort = fortsData.find(f => f.id === id);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => setLoading(false), 1000); // Adjust based on real fetching time
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!fort) {
        return (
            <div>
                <p>Fort not found. Please check the ID in the URL.</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    const { name, district, details, image } = fort;
    const { description, places_to_visit, how_to_reach, other_details } = details;

    return (
        <>
            <div className="fort-details-container">
                <button
                    className="back-button"
                    onClick={() => navigate(`/district/${districtName || fort.district}`)}
                >
                    &larr; Back to {districtName || fort.district}
                </button>

                <div className="fort-detail-layout-container">
                    <div className="fort-detail">
                        <img src={image || '/assets/images/placeholder.jpg'} alt={name} className="fort-detail-image" />
                        <h2 className="fort-name" style={activeStyles}>{name}</h2>
                        <div className="fort-detail-info-text">
                            <p><FaLocationDot className='fort-detail-icon' /> {district}</p>
                            <p><IoTime className='fort-detail-icon' /> {other_details.best_season_to_visit}</p>
                        </div>
                    </div>

                    <nav className="host-fort-detail-nav">
                        <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null}>Details</NavLink>
                        <NavLink to="architecture" style={({ isActive }) => isActive ? activeStyles : null}>Architectural Features</NavLink>
                        <NavLink to="reach" style={({ isActive }) => isActive ? activeStyles : null}>How to Reach</NavLink>
                        <NavLink to="entry" style={({ isActive }) => isActive ? activeStyles : null}>Other Details</NavLink>
                        <NavLink to="photo" style={({ isActive }) => isActive ? activeStyles : null}>Photo Gallery</NavLink>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
