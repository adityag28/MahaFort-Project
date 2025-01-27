import React from 'react'
import fortsData from '../data/forts-data.json';
import { useParams } from 'react-router-dom';

export default function HostPhotoGallery() {
    const { id } = useParams();

    const fortDetails = fortsData.find(f => f.id === id);

    if (!fortDetails) {
        return <p>Details not found. Please check the ID in the URL.</p>;
    }

    const { image, name } = fortDetails;

    return (
        <div className='host-fort-photos'>
            {image ? (
                <img src={image} alt={name} className="host-fort-image" />
            ) : (
                <div className="no-image-available">
                    <p>No image available for {name}.</p>
                </div>
            )}
        </div>
    );
}
