import React from 'react';
import './Style/AboutUs.scss';
import { FaChevronRight } from "react-icons/fa";
import HistoryContent from './HistoryContent'
import TeamMembers from './TeamMembers';

export default function AboutUs() {
  const serviceItem1 = [
    {id: 1, className: "ser-item", img: "../../../public/imgs/process1.png", h3: "Frame the Problem"},
    {id: 2, className: "ser-item", img: "../../../public/imgs/process2.png", h3: "Collect the Raw Data"},
    {id: 3, className: "ser-item", img: "../../../public/imgs/process3.png", h3: "Process the Data"},
    {id: 4, className: "ser-item", img: "../../../public/imgs/process4.png", h3: "Explore the Data"},
    {id: 5, className: "ser-item", img: "../../../public/imgs/process5.png", h3: "Perform In-depth Analysis"},
    {id: 6, className: "ser-item", img: "../../../public/imgs/process6.png", h3: "Communicate Results"}
]
  return (
    <div className='about-us'> 
      <div class="cover-page">
        <div class="details">
          <h2>About US</h2>
          <div class="link-page">
            <a href="/">Home</a>
            <FaChevronRight className='i'/>
            <span>About US</span>
          </div>
        </div>
      </div>
      <HistoryContent />
      <TeamMembers />
      <div className='ser1'>
        <div className='case-cover'>
          <div className="details1">
            <div className="logo">
              <img src="../../../public/imgs/logo2.png"/>
              <span>HOW IT'S WORK</span>
            </div>
            <h2>The Data Science Process</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
        <div className='service-container container'>
          <div className='row'>
            {serviceItem1.map((service) => 
            <div className="col-lg-4 col-md-6 col-12" key={service.id}>
              <div className={service.className}>
                  <img src={service.img}/>
                <div className="service-details">
                  <h3>{service.h3}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}
