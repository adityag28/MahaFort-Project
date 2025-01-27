import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useEffect } from 'react';



export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="contact-container" role='img' aria-label='A fort background image'>
        <h1>Contact Us</h1>
      </div>
      <div className="contact-form">
        <h1>We'd love to help you!</h1>
        <form className='form-main-section'>
          <div className="form-section-1">
            <div className="form-group">
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                placeholder='Full Name'
              />
            </div>
            <div className="form-group">
              <label htmlFor='number'>Name</label>
              <input
                type='number'
                id='number'
                placeholder='Contact number'
              />
            </div>

            <div className="form-group">
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Email Id'
              />
            </div>
          </div>
          <div className="form-section-2">
            <div className="form-group">
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                placeholder='Give Your Feedback or Message'
                rows={6}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </div>

        </form>
      </div>
      <hr />
      <div className="find-here">
        <h1>Check us out here!</h1>
        <div className='contact-here'>
          <address>
            <p>  <IoCall /> +91 267484839</p>
            <p>  <FaLocationDot /> Pune, Maharashtra</p>
            <p>  <IoIosMail /> <a href="mailto:forts@gmail.com">forts@gmail.com</a></p>
          </address>
        </div>
        <div class="map-container">
          <div class="map-responsive">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121078.31778973617!2d73.79175711756943!3d18.497359581174624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9ff81f1aae9%3A0x2560343555ac8b53!2sHadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1736134564037!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </>
  );
}
