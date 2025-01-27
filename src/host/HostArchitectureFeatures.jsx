import React from 'react'
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';

export default function HostArchitectureFeatures() {
    const { id } = useParams();
    const fortDetails = fortsData.find(f => f.id === id);

    if (!fortDetails) {
        return (
            <div className="fort-architecture-features">
                <p className="error-message">
                    Details not found. Please check the ID in the URL.
                </p>
            </div>
        );
    }

    const { name, district, details } = fortDetails;
    const { description, places_to_visit, architecture } = details;

    return (
        <div className="fort-architecture-features">
            <h2>Architecture Features of {name}</h2>
            <div className="architecture-details">
                {places_to_visit && places_to_visit.length > 0 ? (
                    <div>
                        {places_to_visit.map((place, index) => (
                            <p key={index}>{place}</p>
                        ))}
                    </div>
                ) : (
                    <p>No specific architecture details available for {name} at this time.</p>
                )}
            </div>
        </div>
    );
}