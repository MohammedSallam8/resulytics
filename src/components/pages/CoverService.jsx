import React from 'react'
import './Style/CoverService.scss'
import { FaCalendarAlt } from "react-icons/fa";

const CoverService = () => {
  return (
    <div className='cover-service'>
      <img src="../../../public/imgs/service1.png" className="img-1"></img>
      <img src="../../../public/imgs/service2.png" className="img-2"></img>
      <div className='container'>
        <div className='row'>
          <div className="col-lg-6 col-12 item-img">
            <img src="../../../public/imgs/project-start1.png"/>
          </div>
          <div className="col-lg-6 col-12 item-details">
            <h2>We Like to Start Your Project With Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <button className="link-btn">
              <FaCalendarAlt  className='i'/> Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverService