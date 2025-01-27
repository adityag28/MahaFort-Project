import React, { useState } from 'react';
import fortsData from '../data/forts-data.json';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ExploreForts() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [selectedCity, setSelectedCity] = useState('');
  const [visibleForts, setVisibleForts] = useState(12);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setVisibleForts(12); // Reset the visible forts when the city changes
  };

  const handleClear = () => {
    setSelectedCity('');
    setVisibleForts(12); // Reset visible forts when clearing
  };

  const filteredForts = selectedCity
    ? fortsData.filter(fort => fort.district === selectedCity)
    : fortsData;

  const showAllForts = () => {
    setVisibleForts(filteredForts.length);
  };

  const uniqueCities = [...new Set(fortsData.map(fort => fort.district))];

  return (
    <>
      <div className="explore-container" role='img' aria-label='A fort background image'>
        <h1>Explore Forts</h1>
        <p>Explore the Stories Behind Maharashtra's Majestic Forts</p>
      </div>

      <div className="explore-city">
        <form className="filter-form">
          <label htmlFor="city">Filter by City:</label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="filter-select"
          >
            <option value="">All Cities</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>

          <Button variant="outline-danger" onClick={handleClear} className="clear-btn">
            Clear All
          </Button>
        </form>


        <div className='city-container'>
          {filteredForts.length > 0 ? (
            filteredForts.slice(0, visibleForts).map(fort => (
              <Card key={fort.id} style={{ width: '24rem' }} className='place-card-tile'>
                <Link to={`/forts/${fort.id}`}>
                  <Card.Img variant="top" src={fort.image || '/assets/images/default-fort.jpg'} className='fort-img' loading="lazy" />
                  <Card.Body>
                    <Card.Title>{fort.name}</Card.Title>
                    <Card.Text>{fort.district}</Card.Text>
                    <Card.Text className='card-description'>{fort.details.description}</Card.Text>
                    <Button variant="primary">View More</Button>
                  </Card.Body>
                </Link>
              </Card>
            ))
          ) : (
            <p>No forts found for the selected city.</p>
          )}

          {visibleForts < filteredForts.length && (
            <Button className='show-more-button' variant="secondary" onClick={showAllForts}>
              Show {filteredForts.length - visibleForts} more forts
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
