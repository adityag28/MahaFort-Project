import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fortsData from '../data/forts-data.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
export default function DistrictPage() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const { districtName } = useParams();
    const districtForts = fortsData.filter(fort => fort.district === districtName);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredForts = districtForts.filter(fort =>
        fort.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const placeInfo = {
        Pune: "Pune, known as the cultural capital of Maharashtra, is home to several historic forts, including the iconic Sinhagad, Rajgad, and Purandar. These forts played significant roles in Maratha history and offer stunning views of the surrounding landscapes.",
        Satara: "Satara is famous for its strategic forts, including the historic Sajjangad, where the saint Samarth Ramdas spent his last years, and the towering Pratapgad, which witnessed the legendary battle between Shivaji Maharaj and Bijapur forces. These forts are steeped in Maratha heritage.",
        Raigad: "Raigad is a prominent fort that served as the capital of the Maratha Empire under Chhtrapati Shivaji Maharaj. Perched atop a hill, it offers breathtaking views and is known for its historical significance, including the coronation of Shivaji as the Chhatrapati.",
        Nashik: "Nashik is home to several historic forts, including the rugged Trimbak Fort and the majestic Anjneri Fort, believed to be the birthplace of Lord Hanuman. These forts offer glimpses into Nashik's rich heritage and Maratha history, set against scenic landscapes.",
        'Chhatrapati Sambhajinagar (Aurangabad)': "Aurangabad is renowned for its historical forts like Daulatabad Fort, a formidable hill fortress that once served as the capital of the Delhi Sultanate, and the Ellora Caves, which are dotted with ancient fortifications. These forts highlight the region's strategic importance.",
        Kolhapur: "Kolhapur is home to the historic Panhala Fort, known for its impressive fortifications and role in Maratha history. The fort was a significant military stronghold during the reign of Chhatrapati Shivaji Maharaj and offers panoramic views of the surrounding Sahyadri range.",
        'Ahilyanagar (Ahmednagar)': "Ahmednagar is known for its imposing Ahmednagar Fort, which played a crucial role during the Mughal and Maratha conflicts. This well-preserved fort is famous for its strategic location and rich history, including its use as a military base.",
        Thane: "Thane is home to several historical forts, including the lesser-known Yeoor Fort and the ancient St. John Fort. These forts, surrounded by lush greenery, reflect the region's strategic importance during the Maratha and British eras.",
        Amravati: "Amravati is known for the historic Amba Devi Fort, located on the hilltop near the Amba Devi Temple. The fort, with its scenic surroundings, was a key location during the Maratha period and offers insights into the region’s rich cultural.",
        Nagpur: "Nagpur is home to the historic Nagpur Fort, built by the Bhonsle rulers of the Maratha Empire. The fort, with its strong walls and gates, played a significant role in protecting the city during various battles and is a testament to the region’s Maratha heritage.",
        Ratnagiri: "Ratnagiri is known for the historical Ratnadurg Fort, which overlooks the Arabian Sea and offers stunning views. This fort played an important role in safeguarding the region during the Maratha and British periods and is a key landmark of Ratnagiri’s coastal heritage.",
        Sindhudurg: "Sindhudurg is famous for the Sindhudurg Fort, built by Chhatrapati Shivaji Maharaj on an island off the coast. Known for its impressive architecture and strategic location, the fort served as a vital naval base for the Maratha Empire and remains a symbol of Maratha maritime power.",
        Latur: "Latur is home to the historic Udgir Fort, which played a crucial role during the Maratha and Nizam rule. Situated on a hill, the fort offers a glimpse into the region’s strategic military importance and rich cultural heritage."
    }
    const districtImage = {
        Pune: " ../images/Rajgad.jpg",
        Satara: " ../images/Kaas.jpg",
        Raigad: "../images/Raigad.jpeg",
        Nashik: "../images/Harihar.jpg",
        'Chhatrapati Sambhajinagar (Aurangabad)': "../images/Devgiri.jpg",
        Kolhapur: "../images/Panhala.jpg",
        'Ahilyanagar (Ahmednagar)': "../images/Kalasubai.jpg",
        Thane: "../images/Mahuli.jpg",
        Amravati: "../images/Chikhaldara.jpg",
        Nagpur: "../images/Ambagad.jpg",
        Ratnagiri: "../images/Ratnadurg.jpg",
        Sindhudurg: "../images/Sindhudurg.jpg",
        Latur: "../images/Ausagad.jpg"
    }

    return (
        <>
            <div className="district-container-banner"
                style={{
                    backgroundImage: `url(${districtImage[districtName]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                    minHeight: "550px",
                    width: "100 %",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginBottom: "30px"
                }}
                role="img" aria-label={`Image of ${name}`}>
                <h1>Popular Forts in {districtName}</h1>
                <p>{placeInfo[districtName]}</p>
            </div >

            <div className='district-container'>
                <div className='place-card'>
                    {filteredForts.length > 0 ? (
                        filteredForts.map(fort => (
                            <Card key={fort.id} style={{ width: '24rem' }} className='place-card-tile'>
                                <Link to={`/forts/${fort.id}`}>
                                    <Card.Img
                                        variant="top"
                                        src={fort.image || '/assets/images/default-fort.jpg'}
                                        alt={`Image of ${fort.name} fort`}
                                        className='fort-img'
                                        loading="lazy"
                                    />
                                    <Card.Body>
                                        <Card.Title> <FaLocationDot className='fort-detail-icon' /> {fort.name}</Card.Title>
                                        <Card.Text className='card-description'>{fort.details.description}</Card.Text>
                                        <Button variant="primary">View More</Button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        ))
                    ) : (
                        <p>No forts found in this district.</p>
                    )}
                </div>
            </div>
        </>
    );
}
