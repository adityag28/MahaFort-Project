import React from 'react'
import { useEffect } from 'react';


export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="about-container" role='img' aria-label='A fort background image'>
        <h1>About Us</h1>
      </div>
      <div className='about-information'>
        <h2>Our Information</h2>
        <p>
          This platform is dedicated to uncovering and showcasing the rich history and architectural marvels of Maharashtra’s forts. Our goal is to provide travelers, trekkers, and history enthusiasts with detailed insights into the iconic and lesser-known forts across the region.
          Each fort carries a unique story—echoing tales of bravery, ancient trade routes, and the cultural evolution of Maharashtra. By documenting these historical treasures, we aim to promote heritage tourism and create awareness about their preservation.
          Our journey began with a passion for exploration and a desire to highlight the hidden gems that lie beyond popular tourist trails. From the towering walls of Rajgad to the scenic trek to Tikona, we strive to bring together authentic information and practical guides that help adventurers plan their visits seamlessly.
          Through curated content, we not only focus on the historical aspects but also provide details such as the best time to visit, trekking routes, nearby attractions, and accommodation options.
          We believe that Maharashtra’s forts are more than just monuments—they represent a living connection to the past. This platform serves as a bridge between history and modern exploration, making it easier for people of all ages to experience the grandeur of these timeless structures.
          Whether you are a solo traveler, part of a trekking group, or a family looking for a historical retreat, our guide ensures you have the right tools to embark on your adventure with confidence.
          Our mission extends beyond exploration. By sharing detailed insights and encouraging responsible tourism, we hope to inspire future generations to respect and protect these heritage sites. Join us in rediscovering Maharashtra’s glorious past—one fort at a time.
        </p>
      </div>

    </>
  )
}
