import React from 'react'
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';

export default function HostEntryDetails() {
    const { id } = useParams();

    const fortDetails = fortsData.find(f => f.id === id);

    // Check if fortDetails or other details are missing
    if (!fortDetails || !fortDetails.details || !fortDetails.details.other_details) {
        return <p>Details not found. Please check the ID in the URL or ensure the fort data is complete.</p>;
    }

    const { other_details } = fortDetails.details;
    const { fees, accommodation_facility, time_to_reach, best_season_to_visit } = other_details;

    return (
        <div className="host-entry-details">
            <p><b>Entry Fee: </b> {fees?.entry_fee || 'Not Available'}</p>
            <p><b>Accommodation Facility: </b> {accommodation_facility || 'Not Available'}</p>
            <p><b>Time to Reach: </b> {time_to_reach || 'Not Available'}</p>
            <p><b>Best Time to Visit: </b> {best_season_to_visit || 'Not Available'}</p>
        </div>
    );
}
