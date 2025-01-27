import React from 'react';
import { FaStar } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';

export default function Testimonial() {
    return (
        <div className="testimonial-container">
            <h1>-Testimonials & Reviews-</h1>
            <p>People who love this place!</p>
            <div className='testimonial-card-group'>
                <div className="testimonial-card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam laboriosam sint tempore saepe distinctio obcaecati in. Tempore error eveniet corporis earum? Qui repudiandae, sequi distinctio quasi dolor velit quibusdam fugiat!</p>
                    <div className="testimonial-rating">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                    <p className="testimonial-name">- John Doe</p>
                </div>
                <div className="testimonial-card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptate, harum incidunt pariatur praesentium modi quos repudiandae rerum deleniti doloribus!</p>
                    <div className="testimonial-rating">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                    <p className="testimonial-name">- Jane Smith</p>
                </div>
                <div className="testimonial-card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptate, harum incidunt pariatur praesentium modi quos repudiandae rerum deleniti doloribus!</p>
                    <div className="testimonial-rating">
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                    <p className="testimonial-name">- Jane Smith</p>
                </div>
            </div>
        </div>
    );
}
