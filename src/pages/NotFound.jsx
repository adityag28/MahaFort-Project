// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const NotFound = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div className="not-found">
            <h2>Oops! Page Not Found.</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default NotFound;
