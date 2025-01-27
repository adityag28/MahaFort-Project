import React from 'react';
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { LuMountain } from "react-icons/lu";

export default function HostFortDetails() {
    const { id } = useParams();
    const fortDetails = fortsData.find(f => f.id === id);

    if (!fortDetails) {
        return (
            <div className="host-fort-description">
                <div className="error-container">
                    <p>Details not found. Please check the ID in the URL.</p>
                    <button onClick={() => window.history.back()}>Go Back</button>
                </div>
            </div>
        );
    }

    const { name, district, details, map } = fortDetails;
    const { description, places_to_visit } = details;

    return (
        <div className='host-fort-description'>
            <div className="fort-description">
                <p>{description}</p>
            </div>

            <div className="fort-map">
                {map ? (
                    <div
                        className="fort-map-iframe"
                        dangerouslySetInnerHTML={{ __html: map }}
                    />
                ) : (
                    <p>Map not available for {name}.</p>
                )}
            </div>
        </div>
    );
}