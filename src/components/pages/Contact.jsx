import React from 'react'
import './Style/Contact.scss'
import { FaChevronRight } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='main-contact'>
      <div className='blog-cover'>
        <div className='details'>
          <h2>Contact</h2>
          <div className='link'>
            <a href='/'>Home</a>
            <FaChevronRight className='i'/>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="container contact-item">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 item">
              <div className="icon">
                <FaMapMarkerAlt className='i'/>
              </div>
              <div className="details">
                  <h3>Our Address</h3>
                  <p>175 5th Ave, New York, NY 10010, United States</p>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 item">
              <div className="icon">
                <FaPhoneVolume className='i'/>
              </div>
              <div className="details">
                  <h3>Our Address</h3>
                  <p>Mobile: (+44) - 45789 - 5789</p>
                  <p>E-mail: hello@rewy.com</p>
              </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 item item-1">
              <div className="icon">
                <FaRegClock className='i'/>
              </div>
              <div className="details">
                  <h3>Contact</h3>
                  <p>Monday - Friday: 09:00 - 20:00</p>
                  <p>Sunday & Saturday: 10:30 - 22:00</p>
              </div>
          </div>
          <div className="col-12 item-text text-center container">
              <img src="../../../public/imgs/logo2.png"/>
              <span>GET IN TOUCH</span>
              <h2>Ready to Get Started?</h2>
              <p>Your email address will not be published. Required fields are marked *</p>
          </div>
          <div className="col-lg-6 col-12 form-img">
              <img src="../../../public/imgs/contact.png" />
          </div>
          <div className="col-lg-6 col-12">
            <div className='form'>
              <input type="text" placeholder="Your name"/>
              <input type="text" placeholder="Your email address"/>
              <input type="text" placeholder="Your phone number"/>
              <textarea placeholder="Write your message" cols="30" rows="6" />
              <button className="link-btn"><FaCheck className='i'/>Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact