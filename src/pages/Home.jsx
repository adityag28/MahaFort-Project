import React from 'react'
import Forts from './Forts';
import Testimonial from './Testimonial';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import SearchBar from './SearchBar';




export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (

    <>
      <div className='carousel-container'>
        <div className="overlay">
          <h1>Experience the Majesty of Maharashtra's Forts</h1>
          <SearchBar />
        </div>
        <Carousel controls={false} className='carousel-size'>
          <Carousel.Item interval={1000} className="carousel-item-1">
          </Carousel.Item>

          <Carousel.Item interval={1000} className="carousel-item-2">

          </Carousel.Item>

          <Carousel.Item interval={1000} className="carousel-item-3">

          </Carousel.Item>

          <Carousel.Item interval={1000} className="carousel-item-4">
          </Carousel.Item>
        </Carousel>


      </div>
      <Forts />
      <Testimonial />
    </>
  )
}
